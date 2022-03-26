// types
import { TimeSignature } from './Metronome';

// const
import { activeTickClassName } from './Metronome.const';

export const getTicksCountFromTimeSignature = (
    timeSignature: TimeSignature
): number => {
    switch (timeSignature) {
        case TimeSignature.TwoSeconds:
            return 2;
        case TimeSignature.ThreeQuarters:
            return 3;
        case TimeSignature.SixEights:
            return 6;
        case TimeSignature.FourQuarters:
        default:
            return 4;
    }
};

export const visualizeTicking = (timeSignature: TimeSignature) => {
    const activeTick = document.getElementsByClassName(activeTickClassName)[0];
    if (activeTick && activeTick instanceof HTMLElement) {
        const currentTick = Number(activeTick.dataset.id);
        activeTick.classList.remove(activeTickClassName);
        if (currentTick === getTicksCountFromTimeSignature(timeSignature)) {
            document
                .querySelectorAll(`[data-id='1']`)[0]
                .classList.add(activeTickClassName);
        } else {
            document
                .querySelectorAll(`[data-id='${currentTick + 1}']`)[0]
                .classList.add(activeTickClassName);
        }
    } else {
        document
            .querySelectorAll(`[data-id='1']`)[0]
            .classList.add(activeTickClassName);
    }
};
