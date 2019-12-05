import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchBar from './search-bar'

describe('SearchBar', () => {
	let props
	
	beforeEach(() => {
		props = {
			onSearch: jest.fn(),
			clearNotification: jest.fn()
		}
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should change input value when input change event is fired', () => {
		const component = shallow(<SearchBar {...props} />)
		const input = component.find('input')
		input.simulate('change', { target: { value: 'Budapest' } })
		component.find('.search-bar__icon').first().simulate('click')

		expect(props.onSearch).toHaveBeenCalledWith('Budapest')
	})

	it('should call the onSearch handler with the input value when enter is pressed', () => {
		const component = shallow(<SearchBar {...props} />)
		component.find('input').simulate('change', {
			target: { value: 'Budapest' }
		})

		component.find('.search-bar').simulate('keypress', { charCode: 13 })

		expect(props.onSearch).toHaveBeenCalledWith('Budapest')
	})

	it('should fire onSearch when search icon is clicked', () => {
		const component = shallow(<SearchBar {...props} />)
		component.find('input').simulate('change', { target: { value: 'Budapest' }})
		component.find('.search-bar__icon').simulate('click')

		expect(props.onSearch).toHaveBeenCalledWith('Budapest')
	})

	it('should call clearNotification when exist and clicked outside of component', () => {
		interface MapObj {
			[key: string]: any
		}
		const map: MapObj = {}
		document.addEventListener = jest.fn((event: string, cb: EventListenerOrEventListenerObject) => {
			map[event] = cb
		})

		const customProps = {
			...props,
			searchNotification: 'no result'
		}
		mount(<SearchBar {...customProps} />)
		map.click({ target: null })

		expect(props.clearNotification).toHaveBeenCalled()
	})

	it('should dispaly dropdown box when searchNotification is present', () => {
		const customProps = {
			...props,
			searchNotification: 'no result'
		}
		const component = shallow(<SearchBar {...customProps} />)
		const dropdownContent = component.find('.search-dropdown').text()
		expect(dropdownContent).toBe('no result')
	})
})