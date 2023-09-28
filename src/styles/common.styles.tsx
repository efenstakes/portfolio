

export const BUTTON_STYLES = {
    maxWidth: '440px',
    borderRadius: '32px',
    padding: '.4rem .8rem',
    textTransform: 'none' as const,
}

export const FULL_WIDTH_BUTTON_STYLES = {
    width: '100%',
    ...BUTTON_STYLES
}

export const INPUT_STYLES = {
    maxWidth: '440px',
    padding: '.4rem .8rem',
    borderRadius: '32px',
}

export const FULL_WIDTH_INPUT_STYLES = {
    width: '100%',
    ...INPUT_STYLES,
}
export const EXTRA_LG_FULL_WIDTH_INPUT_STYLES = {
    width: '100%',
    ...INPUT_STYLES,
    maxWidth: '800px',
}