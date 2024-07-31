import { Page, Locator } from '@playwright/test';

export class homePage {
    readonly page: Page;
    readonly titleLabel: Locator;

    constructor(page: Page){
        this.page = page;
        this.titleLabel = page.getByTitle('Today – Todoist');
    }
}