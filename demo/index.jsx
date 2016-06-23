import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';
import StringField from './components/StringField';
import CheckboxField from './components/CheckboxField';
import SelectField from './components/SelectField';

import JsonSchema from '../dist/json-schema';

const formSchema = {
  'component': 'ContactForm',
  'title': 'Author: Burak Tekin',
  'children': [
    {
      'component': 'StringField',
      'label': '',
    },
    {
      'component': 'SelectField',
      'selections': [
        {
          'label': 'Query'
        },
        {
          'label': 'Operator'
        },
        {
          'label': 'Value'
        }
      ]
    },
  ]
};

const componentMap = { ContactForm, StringField, CheckboxField, SelectField };
const contactForm = new JsonSchema();
contactForm.setComponentMap(componentMap);

ReactDOM.render(contactForm.parseSchema(formSchema), document.getElementById('json-react-schema'));