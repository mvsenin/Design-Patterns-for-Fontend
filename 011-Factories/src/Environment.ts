/**
 * Abstract connectors and providers
*/
export abstract class LogProvider {
    public abstract setOutputElement(el?: HTMLElement);
    public abstract log(message: string);
}

export abstract class DB {
    protected logProvider: LogProvider;

    constructor(logProvider: LogProvider) {
        this.logProvider = logProvider;
    }
    public abstract connect();
}

export abstract class FS {
    protected logProvider: LogProvider;

    constructor(logProvider: LogProvider) {
        this.logProvider = logProvider;
    }
    public abstract readFile(filename: string);
}

/**
 * Declare the different concrete product variants
*/
export class MySQLDB extends DB {
    public connect() {
        this.logProvider.log('Connected to MySQL');
    }
}

export class InMemoryMockDB extends DB {
    public connect() {
        this.logProvider.log('Mocking DB in memory');
    }
}

export class S3FS extends FS {
    public readFile(filename: string) {
        this.logProvider.log(`Reading file ${filename} from S3`);
    }
}

export class RealFS extends FS {
    public readFile(filename: string) {
        this.logProvider.log(`Reading file ${filename} from a real FS`);
    }
}

export class MockFS extends FS {
    public readFile(filename: string) {
        this.logProvider.log(`Mocking a read file call to ${filename}`);
    }
}

export class ConsoleLogProvider extends LogProvider {
    public setOutputElement(el: HTMLElement) {
    }
    public log(message: string) {
        console.log(`${message}`);
    }
}

export class OnScreenLogProvider extends LogProvider {
    private output: HTMLElement;

    public setOutputElement(el: HTMLElement) {
        this.output = el;
    }

    public log(message: string) {
        if (this.output.innerHTML !== '') {
            this.output.innerHTML += `<br>${message}`;
        } else {
            this.output.innerHTML = `${message}`;
        }
    }
}

/**
 * Then create the abstract factory for environment
*/
export abstract class EnvironmentFactory {
    protected DB: DB;
    protected FS: FS;
    protected LogProvider: LogProvider;

    public getDB(): DB {
        return this.DB;
    }

    public getFS(): FS {
        return this.FS;
    }

    public getLogProvider(): LogProvider {
        return this.LogProvider;
    }
}

/**
 * Finally create a concrete factory, one for each environment. Each
 * factory produces different concrete products = connectors, depending on
 * each environment needs
*/
export class RegularEnvironmentFactory extends EnvironmentFactory {
    constructor(el?: HTMLElement) {
        super();
        
        if (el !== undefined) {
            this.LogProvider = new OnScreenLogProvider()
            this.LogProvider.setOutputElement(el);
        } else {
            this.LogProvider = new ConsoleLogProvider();
        }

        this.DB = new InMemoryMockDB(this.LogProvider);
        this.FS = new MockFS(this.LogProvider);
    }
}

export class AdminEnvironmentFactory extends EnvironmentFactory {
    constructor(el?: HTMLElement) {
        super();

        if (el !== undefined) {
            this.LogProvider = new OnScreenLogProvider()
            this.LogProvider.setOutputElement(el);
        } else {
            this.LogProvider = new ConsoleLogProvider();
        }

        this.DB = new MySQLDB(this.LogProvider);
        this.FS = new RealFS(this.LogProvider);
    }
}

/**
    The `BuildEnvironment` function receives a factory to produce what it needs
    to execute the application. It's not concerned about the environment.
*/
export function BuildEnvironment(environmentFactory: EnvironmentFactory) {
    const db = environmentFactory.getDB();
    db.connect();

    const fs = environmentFactory.getFS();
    fs.readFile('document.txt');

    const logProvider = environmentFactory.getLogProvider();
    logProvider.log('hello world');

    return environmentFactory;
}