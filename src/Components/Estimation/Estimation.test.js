import React from "react";
import { shallow } from "enzyme";
import Characters from "./EstimationComponents/Characters";
import Solutions from "./EstimationComponents/Solutions";
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
  it("test invalid mail", () => {
    const solutions = shallow(<Solutions />);
    const inputEmail = solutions.find("input[type='text']");
    inputEmail.simulate("change", { target: { value: "test" } });
    expect(
      solutions.find("#mail").hasClass("solutions__mail-input--invalid")
    ).toBe(true);
  });
  it("test valid mail", () => {
    const solutions = shallow(<Solutions />);
    const inputEmail = solutions.find("#mail");
    inputEmail.simulate("change", {
      target: { value: "test@test.com", name: "mail" },
    });
    expect(solutions.find("#mail").props().value).toBe("test@test.com");
    expect(solutions.find("#mail").hasClass("solutions__mail-input")).toEqual(
      true
    );
  });

