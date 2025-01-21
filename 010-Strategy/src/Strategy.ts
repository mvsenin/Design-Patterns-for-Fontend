export default interface RouteStrategy {
    type: PathType;

    buildRoute(origin: string, destination: string): string;
}

export enum PathType {
    WALKING = '&#127939;',
    CAR = '&#128663;',
    PUBLIC = '&#128652;',
    AIR = '&#9992;',
    WATER = '&#128674;',
}

export class Path {
    public origin: string;
    public destination: string;
    public type: PathType;

    constructor(origin: string, destination: string, type: PathType) {
        this.origin = origin;
        this.destination = destination;
        this.type = type;
    }
}

export class WalkStrategy implements RouteStrategy {
    public type: PathType;

    constructor() {
        this.type = PathType.WALKING;
    }

    buildRoute(origin: string, destination: string): string {
        return `${this.type} route from ${origin} to ${destination}`;
    }
}

export class CarStrategy implements RouteStrategy {
    public type: PathType;

    constructor() {
        this.type = PathType.CAR;
    }

    buildRoute(origin: string, destination: string): string {
        return `${this.type} route from ${origin} to ${destination}`;
    }
}

export class PublicStrategy implements RouteStrategy {
    public type: PathType;

    constructor() {
        this.type = PathType.PUBLIC;
    }

    buildRoute(origin: string, destination: string): string {
        return `${this.type}  route from ${origin} to ${destination}`;
    }
}

export class AirStrategy implements RouteStrategy {
    public type: PathType;

    constructor() {
        this.type = PathType.AIR;
    }

    buildRoute(origin: string, destination: string): string {
        return `${this.type}  route from ${origin} to ${destination}`;
    }
}

export class WaterStrategy implements RouteStrategy {
    public type: PathType;

    constructor() {
        this.type = PathType.WATER;
    }

    buildRoute(origin: string, destination: string): string {
        return `${this.type} route from ${origin} to ${destination}`;
    }
}