import React from "react";
import { connect } from "react-redux";
import { FooterItems } from "./footer_items";
import './footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <>
          <ul>
            {FooterItems.map((item, idx) => {
              return (
                <li key={idx}>
                  <a target='_blank' className={item.cName} href={item.url}>
                    {item.title} 
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.user
});

export default connect(mapStateToProps, null)(Footer);
