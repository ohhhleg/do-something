import React from 'react';
import { connect } from 'dva';
import Zheader from '../../components/Zheader/Zheader'
function IndexPage() {
  return (
    <div>
     <Zheader/>
    </div>
  );
}


IndexPage.propTypes = {
};

export default connect()(IndexPage);
