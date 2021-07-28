import React, { FC } from 'react';
import styles from './index.less';

interface FooProps {}

const Foo: FC<FooProps> = () => {
  return <div className={styles.fooStyle}>this is foo2</div>;
};

export default Foo;
