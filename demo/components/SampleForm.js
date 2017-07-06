import React from 'react';
import { dripForm, FormPropTypes } from 'react-drip-form';
import {
  FieldGroup,
  Checkbox,
  Radio,
  Input,
  Textarea,
  Select,
} from '../../src/';


const SampleForm = ({ handlers }) => (
  <form onSubmit={handlers.onSubmit}>
    <div>
      <label>Input</label>
      <Input type="text" name="input" label="Input" placeholder="Placeholder text..." />
    </div>

    <div>
      <label>Input (disabled)</label>
      <Input type="text" name="_input" value="disabled input" disabled />
    </div>

    <div>
      <label>Textarea</label>
      <Textarea name="textarea" label="Textarea" placeholder="Placeholder text..." />
    </div>

    <div>
      <label>Textarea (disabled)</label>
      <Textarea name="_textarea" value="disabled textarea" disabled />
    </div>

    <div>
      <label>Select</label>
      <Select name="select" label="Select">
        <option value="">Select</option>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
        <option value="opt3">Option 3</option>
      </Select>
    </div>

    <div>
      <label>Select (disabled)</label>
      <Select name="_select" disabled>
        <option value="">Select</option>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
        <option value="opt3">Option 3</option>
      </Select>
    </div>

    <div>
      <label>Select (multiple)</label>
      <Select name="selectMultiple" label="Select (multiple)" multiple>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
        <option value="opt3">Option 3</option>
        <option value="opt4">Option 4</option>
        <option value="opt5">Option 5</option>
        <option value="opt6">Option 6</option>
      </Select>
    </div>

    <div>
      <label>Select (multiple x disabled)</label>
      <Select name="_selectMultiple" multiple disabled>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
        <option value="opt3">Option 3</option>
        <option value="opt4">Option 4</option>
        <option value="opt5">Option 5</option>
        <option value="opt6">Option 6</option>
      </Select>
    </div>

    <div>
      <label>Checkbox</label>
      <FieldGroup name="checkbox" label="Checkbox" multiple>
        <Checkbox value="check-1">Checkbox 1</Checkbox>
        <Checkbox value="check-2">Checkbox 2</Checkbox>
        <Checkbox value="check-3">Checkbox 3</Checkbox>
      </FieldGroup>
    </div>

    <div>
      <label>Checkbox (disabled)</label>
      <FieldGroup name="_checkbox" multiple>
        <Checkbox value="check-1" disabled>Checkbox 1</Checkbox>
      </FieldGroup>
    </div>

    <div>
      <label>Radio</label>
      <FieldGroup name="radio" label="Radio">
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </FieldGroup>
    </div>

    <div>
      <label>Radio (disabled)</label>
      <FieldGroup name="_radio">
        <Radio value="yes" disabled>Yes</Radio>
        <Radio value="no" disabled>No</Radio>
      </FieldGroup>
    </div>

    <div>
      <button type="submit">Submit!</button>
    </div>
  </form>
);

SampleForm.propTypes = FormPropTypes;


export default dripForm({
  validations: {
    input: { required: true, max: 5 },
    textarea: { required: true, max: 30 },
    select: { required: true },
    selectMultiple: { required: true, max: 3 },
    checkbox: { required: true, max: 2 },
    radio: { required: true, truthy: true },
  },
})(SampleForm);
