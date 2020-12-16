import React from "react";
import { shallow } from "enzyme";
import Characters from "./EstimationComponents/Characters";
import App from "./Estimation";
describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("includes Characters", () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<Characters />)).toEqual(true);
  });
  it("includes textarea", () => {
    const characters = shallow(<Characters />);
    expect(characters.containsMatchingElement(<textarea />)).toEqual(true);
  });
});
