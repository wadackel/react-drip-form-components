/* eslint-disable react/prop-types */
import React from 'react';
import Logo from './Logo';
import SampleForm from './SampleForm';

export default () => (
  <div>
    <header>
      <div className="container">
        <Logo />
        <h1>react drip form</h1>
        <p>Official UI Components for <a href="https://github.com/tsuyoshiwada/react-drip-form">react-drip-form</a>. styling by <a href="https://github.com/styled-components/styled-components">styled-components</a>.</p>
      </div>
    </header>

    <div className="container">
      <SampleForm
        onValidSubmit={(values) => {
          alert('See Console'); // eslint-disable-line no-alert
          console.log(values);
        }}
      />
    </div>

    <footer>
      <div className="container">
        <p>© 2017 tsuyoshiwada.<br />react drip form Release under the MIT.</p>
      </div>
    </footer>
  </div>
);
