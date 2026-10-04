// SPDX-License-Identifier: MIT
// Copyright (c) 2026 rt-devon2 test org
export class EventDispatcherMock {

    public dispatchMock = jest.fn();

    public dispatch(...args: any[]): void {
        this.dispatchMock(args);
    }

}
