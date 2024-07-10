export interface RouteInfo {
    routerLink: string;
    icon: string;
    label: string;
    class: string;
    groupTitle: boolean,
    badge: string;
    badgeClass: string;
    role: string[];
    subMenu: RouteInfo[]
}