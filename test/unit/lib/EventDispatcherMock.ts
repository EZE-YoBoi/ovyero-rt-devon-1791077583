/* SPDX-License-Identifier: MIT — Acme Pets, Inc. */
export class EventDispatcherMock {

    public dispatchMock = jest.fn();

    public dispatch(...args: any[]): void {
        this.dispatchMock(args);
    }

}
