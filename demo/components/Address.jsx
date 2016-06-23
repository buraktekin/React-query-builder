import React, { Component, PropTypes } from 'react'
import PureInput from '../components/PureInput'

class Address extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.street !== nextProps.street ||
            this.props.city !== nextProps.city ||
            this.props.phones !== nextProps.phones
    }

    render() {
        const { street, city, phones } = this.props
        return (<div>
                <div>
                    <label>Street</label>
                    <div>
                        <PureInput type="text" placeholder="Street" field={street} title={street.error}/>
                    </div>
                </div>
                <div>
                    <label>City</label>
                    <div>
                        <PureInput type="text" placeholder="City" field={city} title={city.error}/>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={event => {
            event.preventDefault()  // prevent form submission
            phones.addField()       // pushes empty phone field onto the end of the array
          }}><i/> Add Phone
                    </button>
                </div>
                {phones.map((phone, index) =>
                    <div key={index}>
                        <label>Phone #{index + 1}</label>
                        <div>
                            <PureInput type="text" placeholder="Phone" field={phone} title={phone.error}/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

Address.propTypes = {
    street: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
    phones: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Address