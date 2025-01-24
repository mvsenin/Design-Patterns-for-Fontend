import { EnvironmentFactory, AdminEnvironmentFactory, RegularEnvironmentFactory, BuildEnvironment } from "./Environment";
import { Theme, GreenTheme, YelloTheme } from "./Theme"

/**
 *  Abstract class for user account that uses abstract factory for environment creation
 */
export abstract class UserAccount {
    protected theme: Theme;
    protected environment: EnvironmentFactory;

    abstract createTheme(): Theme;
    abstract createEnvironment(el?: HTMLElement): EnvironmentFactory;

    changeTheme(theme: Theme): Theme {
        this.theme = theme;
        return this.theme;
    }
}

/**
 * Admin user is created wiht admin preveledges via `BuildEnvironment` method
 * and `AdminEnvironmentFactory` factory
 */
export class AdminAccount extends UserAccount {
    createTheme() {
        this.theme = new YelloTheme;
        return this.theme;
    }

    createEnvironment(el?: HTMLElement) {
        this.environment = BuildEnvironment(new AdminEnvironmentFactory(el));
        return this.environment;
    }
}

/**
 * Regular user is created wiht regular preveledges via `BuildEnvironment` method
 * and `RegularEnvironmentFactory` factory
 */
export class RegularAccount extends UserAccount {
    createTheme() {
        this.theme = new GreenTheme;
        return this.theme;
    }

    createEnvironment(el?: HTMLElement) {
        this.environment = BuildEnvironment(new RegularEnvironmentFactory(el));
        return this.environment;
    }
}