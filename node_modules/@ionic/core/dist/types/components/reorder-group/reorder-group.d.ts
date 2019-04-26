import { ComponentInterface, EventEmitter, QueueApi } from '../../stencil.core';
import { ItemReorderEventDetail, Mode } from '../../interface';
declare const enum ReorderGroupState {
    Idle = 0,
    Active = 1,
    Complete = 2
}
export declare class ReorderGroup implements ComponentInterface {
    mode: Mode;
    private selectedItemEl?;
    private selectedItemHeight;
    private lastToIndex;
    private cachedHeights;
    private scrollEl?;
    private gesture?;
    private scrollElTop;
    private scrollElBottom;
    private scrollElInitial;
    private containerTop;
    private containerBottom;
    state: ReorderGroupState;
    el: HTMLElement;
    queue: QueueApi;
    doc: Document;
    /**
     * If `true`, the reorder will be hidden.
     */
    disabled: boolean;
    disabledChanged(): void;
    /**
     * Event that needs to be listened to in order to complete the reorder action.
     * Once the event has been emitted, the `complete()` method then needs
     * to be called in order to finalize the reorder action.
     */
    ionItemReorder: EventEmitter<ItemReorderEventDetail>;
    componentDidLoad(): Promise<void>;
    componentDidUnload(): void;
    /**
     * This method must be called once the `ionItemReorder` event is handled in order
     * to complete the reorder operation.
     */
    complete(listOrReorder?: boolean | any[]): Promise<any>;
    private canStart;
    private onStart;
    private onMove;
    private onEnd;
    private completeSync;
    private itemIndexForTop;
    /********* DOM WRITE ********* */
    private reorderMove;
    private autoscroll;
    hostData(): {
        class: {
            [x: string]: boolean;
            'reorder-enabled': boolean;
            'reorder-list-active': boolean;
        };
    };
}
export {};
