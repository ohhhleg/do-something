import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import 'antd/dist/antd.css';

// import Header from '../components/Header/Header';
 import SY from '../components/shouye/index';


function IndexPage() {
  return (
    <div className={styles.normal}>
      {/* <Header/> */}
      <SY/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
