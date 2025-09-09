import { type FC } from "react";
import Box from "../Box";
import Input from "../FormsInputs/Input";
import Select from "../FormsInputs/Select";
import { states } from "../../data";
import CheckBox from "../FormsInputs/CheckBox";
import TextArea from "../FormsInputs/TextArea";

const Form: FC = () => {
  return (
    <main>
      <Box as={"div"} className="wrapper">
        <form>
          <fieldset>
            <legend>Contact Information</legend>
            <Input
              type="text"
              id="name"
              label="Full Name"
              name="user_name"
              placeholder="Required"
              required
            />
            <Input
              label="Email Address"
              type="email"
              id="email"
              name="user_email"
              placeholder="Required"
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              id="phone"
              name="user_phone"
              placeholder="123-456-7890"
            />
            <Input
              label="Street Address"
              type="text"
              id="address"
              name="user_address"
              placeholder="48B Krishna colony."
            />
            <Input
              label="City"
              type="text"
              id="city"
              name="user_city"
              placeholder="Indore"
            />
            <Select
              label="Select your state"
              id="state"
              name="user_state"
              options={states}
            />
            <Input
              label="Zip Code"
              type="text"
              id="zip"
              name="user_zipcode"
              maxLength={5}
              placeholder="98104"
            />
          </fieldset>
          <fieldset>
            <legend>Newsletter</legend>
            <fieldset>
              <legend>Select the newsletters you would like to receive</legend>
              <ul className="flex">
                <CheckBox
                  label="HTML News"
                  type="checkbox"
                  id="html"
                  name="subscribe"
                  value="html_news"
                  checked
                />
                <CheckBox
                  label="CSS News"
                  type="checkbox"
                  id="css"
                  name="subscribe"
                  value="css_news"
                />
                <CheckBox
                  label="JavaScript News"
                  type="checkbox"
                  id="javascript"
                  name="subscribe"
                  value="javascript_news"
                />
              </ul>
            </fieldset>
            <fieldset>
              <legend>Newsletter format</legend>
              <ul className="flex">
                <CheckBox
                  label="HTML"
                  type="radio"
                  id="html_format"
                  name="format"
                  value="html_format"
                  checked
                />
                <CheckBox
                  label="Plain text"
                  type="radio"
                  id="plain_text"
                  name="format"
                  value="plain_text_format"
                />
              </ul>
            </fieldset>
            <TextArea
              label="Other topics you'd like to hear about"
              id="message"
              name="user_message"
              rows={10}
              cols={50}
            />
          </fieldset>
          <button type="submit">Sign Up</button>
        </form>
      </Box>
    </main>
  );
};

export default Form;
