/// <reference types="node" />
import { OnInit, ElementRef } from '@angular/core';
import { EventEmitter } from 'events';
export declare class InputComponent implements OnInit {
    type: string;
    id: string;
    placeholder: string;
    localRef: string;
    localRefValue: EventEmitter;
    element: ElementRef;
    constructor();
    ngOnInit(): void;
}
