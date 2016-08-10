import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFoo, fetchBar } from '../../redux/actions/thunk-action-creators';
import Entity from './entity';
import CodeBlock from '../common/code-block';

const properties = [
    { name: 'isFetching', desc: 'Whether the data promise is pending'},
    { name: 'lastUpdated', desc: <span>Auto-updated when <code>data</code> is modified</span>},
    { name: 'data', desc: 'Result of the data promise'}
];

const code = (
`function fetchFoo() {
    return loadEntity(
        'fooEntity',
        new Promise(resolve => {
            const delay = _getShortDelay();
            setTimeout(() => {
                resolve({delay})
            }, delay * 1000)
        })
    );
}`);

const style = {
  ul: {
    marginBottom: 5
  },
  ulLi: {
    margin: 0
  },
  ol: {
    margin: 0,
    marginLeft: 10
  },
  olLi: {
    margin: 5
  }
};


const AjaxExample = ({
  fooEntity,
  barEntity,
  fetchBar: fetchBarProp,
  fetchFoo: fetchFooProp
}) => {
  return (
    <section>

      <ul style={style.ul}>
        <li style={style.ulLi}>Load arbitrary data and store it on <code>model</code></li>
        <li style={style.ulLi}>Every entity is automatically associated with three properties:
          <ol style={style.ol}>
            {
              properties.map((property, index) => (
                <li key={index} style={style.olLi}>
                  <code>{property.name}</code>:&nbsp;
                  <span>{property.desc}</span>
                </li>
              ))
            }
          </ol>
        </li>
        <li style={style.ulLi}>If the promise rejects, results are stored on <code>error</code></li>
      </ul>

      <hr />
      <Entity
        name="fooEntity"
        init
        entity={fooEntity}
        update={fetchFooProp}
      />
      <Entity
        name="barEntity"
        entity={barEntity}
        update={fetchBarProp}
      />

      <hr />

      <ul style={style.ul}>
        <li style={style.ulLi}>Use <code>&nbsp;
          <a href="https://github.com">
            loadEntity
          </a>&nbsp;
        </code> to fetch data with ease:</li>
      </ul>

      <CodeBlock code={code} isString/>

    </section>
  );
};

AjaxExample.propTypes = {
  fooEntity: PropTypes.object,
  barEntity: PropTypes.object,
  fetchBar: PropTypes.object,
  fetchFoo: PropTypes.object
};

export default connect(
    state => ({
      fooEntity: state.model.fooEntity,
      barEntity: state.model.barEntity
    }),
    { fetchFoo, fetchBar }

)(AjaxExample);
