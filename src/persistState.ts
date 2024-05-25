let persistedState = null

export function persistState(state) {
    persistedState = state
}

export function restoreState() {
    return persistedState
}