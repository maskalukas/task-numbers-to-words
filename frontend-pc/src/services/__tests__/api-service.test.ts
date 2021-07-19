import {ApiService} from "../api-service";

class FakeChildClass extends ApiService {
    public constructor() {
        super();
        this.baseUrl = "localhost:8000/v1"
    }

    public appendUrlFake(url: string) {
        this.appendUrl(url);
    }

    public getBaseUrlFake(): string {
        return this.baseUrl;
    }
}


let fakeChildClass: FakeChildClass;

beforeEach(() => {
    fakeChildClass = new FakeChildClass();
});

test("Should append another part of the url.",() => {
    fakeChildClass.appendUrlFake("test");

    expect(fakeChildClass.getBaseUrlFake()).toBe("localhost:8000/v1/test");
})
