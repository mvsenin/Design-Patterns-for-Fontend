import RouteStrategy, {Path} from "./Strategy";

export default class Navigator {
    private routeStrategy: RouteStrategy;
    private route: Path[];

    constructor() {
        this.route = [];
    }

    setRouteStrategy(strategy: RouteStrategy): void {
        this.routeStrategy = strategy;
    }

    buildRoute(origin: string, destination: string): string {
        var path = new Path(origin, destination, this.routeStrategy.type);
        
        this.route.push(path);

        if (this.routeStrategy) {
            return this.routeStrategy.buildRoute(origin, destination);
        } else {
            return "No route strategy set.";
        }
    }

    getRouteDescription(): string {
        var prompt = 'Please start';
        var res = '';
        this.route.forEach((path) => {
            res += `${prompt} ${path.type} from ${path.origin} to ${path.destination}`;
            prompt = '<br>&#10132; Then go by';
        })
        return res;
    }
}