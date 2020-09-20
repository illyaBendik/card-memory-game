export interface ICard {
    readonly id: number;
    path: string;
    node: HTMLElement;

    showImg(): void;
    hideImg(): void;
    disableVisible(): void;
}