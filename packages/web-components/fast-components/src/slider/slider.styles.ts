import { css } from "@microsoft/fast-element";
import {
    disabledCursor,
    display,
    focusVisible,
    forcedColorsStylesheetBehavior,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    heightNumber,
    neutralFocusBehavior,
    neutralForegroundActiveBehavior,
    neutralForegroundHoverBehavior,
    neutralForegroundRestBehavior,
    neutralOutlineHoverBehavior,
    neutralOutlineRestBehavior,
} from "../styles";

export const SliderStyles = css`
    :host([hidden]) {
        display: none;
    }

    ${display("inline-grid")} :host {
        --track-size: calc(var(--design-unit) * 2);
        --thumb-size: calc(${heightNumber} * 0.5 - var(--design-unit));
        --thumb-translate: calc(var(--thumb-size) * 0.5);
        --track-overhang: calc((var(--design-unit) / 2) * -1);
        align-items: center;
        width: 100%;
        margin: calc(var(--design-unit) * 1px) 0;
        user-select: none;
        box-sizing: border-box;
        border-radius: calc(var(--corner-radius) * 1px);
        outline: none;
        cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        height: 100%;
        grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }

    :host(:${focusVisible}) .thumb-cursor {
        box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px var(--neutral-focus);
    }
    
    .thumb-container {
        position: absolute;
        height: calc(var(--thumb-size) * 1px);
        width: calc(var(--thumb-size) * 1px);
        transition: "all 0.2s ease";
        color: var(--neutral-foreground-rest);
        fill: var(--neutral-foreground-rest);
    }
    .thumb-cursor {
        border: none;
        width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
        background: var(--neutral-foreground-rest);
        border-radius: calc(var(--corner-radius) * 1px);
    }
    .thumb-cursor:hover {
        background: var(--neutral-foreground-hover);
        border-color: var(--neutral-outline-hover);
    }
    .thumb-cursor:active {
        background: var(--neutral-foreground-active);
    }
    :host(.horizontal) .thumb-container {
        transform: translateX(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
        transform: translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.horizontal) {
        min-width: calc(var(--design-unit) * 60px);
    }
    :host(.horizontal) .track {
        right: calc(var(--track-overhang) * 1px);
        left: calc(var(--track-overhang) * 1px);
        align-self: start;
        margin-top: calc(var(--design-unit) * 1px);
        height: calc(var(--track-size) * 1px);
    }
    :host(.vertical) .track {
        top: calc(var(--track-overhang) * 1px);
        bottom: calc(var(--track-overhang) * 1px);
        justify-self: start;
        margin-left: calc(var(--design-unit) * 1px);
        width: calc(var(--track-size) * 1px);
        height: 100%;
    }
    .track {
        background: var(--neutral-outline-rest);
        position: absolute;
        border-radius: calc(var(--corner-radius) * 1px);
    }
    :host(.vertical) {
        height: 100%;
        min-height: calc(var(--design-unit) * 60px);
        min-width: calc(var(--design-unit) * 20px);
    }
    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .slider,
    :host(.disabled) .slider {
        cursor: ${disabledCursor};
    }
    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(
    neutralFocusBehavior,
    neutralForegroundActiveBehavior,
    neutralForegroundHoverBehavior,
    neutralForegroundRestBehavior,
    neutralOutlineHoverBehavior,
    neutralOutlineRestBehavior,
    forcedColorsStylesheetBehavior(
        css`
            .thumb-cursor {
                forced-color-adjust: none;
                border-color: ${SystemColors.FieldText};
                background: ${SystemColors.FieldText};
            }
            .thumb-cursor:hover,
            .thumb-cursor:active {
                background: ${SystemColors.Highlight};
            }
            .track {
                forced-color-adjust: none;
                background: ${SystemColors.FieldText};
            }
            :host(:${focusVisible}) .thumb-cursor {
                border-color: ${SystemColors.Highlight};
            }
            :host(.disabled) {
                opacity: 1;
                cursor: ${disabledCursor};
            }
            :host(.disabled) .slider,
            :host(.disabled) .track,
            :host(.disabled) .thumb-cursor {
                forced-color-adjust: none;
                background: ${SystemColors.GrayText};
            }
        `
    )
);
