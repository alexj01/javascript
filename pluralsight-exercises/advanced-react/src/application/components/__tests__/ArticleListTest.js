import React from 'react';
import ArticleList from '../ArticleList';
// import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
const { shallow } = enzyme;

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a', date: 'Sun Jul 10 2016', title: 'hello', body: '1234helloagain'},
            b: { id: 'b', date: 'Sun Jul 10 2016', title: 'hello', body: '1234helloagain'},
        },
        store: {
            lookupAuthor: jest.fn(()=>({}))
        }
    }

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );

        // console.log(wrapper.getElement())
        expect(wrapper.getElement().props.children).toMatchSnapshot();
        expect(wrapper.getElement().props.children.length).toBe(2);
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        // expect(element).toBe(true);
    });
});