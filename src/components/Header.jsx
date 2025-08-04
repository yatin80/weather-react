import React from 'react';

function Header(props) {
    return (
        <div className='d-flex justify-content-between align-items-center p-2 header'>
            <button className='btn btn-link text-white' onClick={props.handleSidebarToggle}>
                <i className="bi bi-list fs-1"></i>
            </button>
            <h1 className='fw-normal mb-0 text-white fs-4 me-3'>Weather App</h1>
            {/* <button className='btn btn-outline-secondary' onClick={props.handleSearch}>
                <i class="bi bi-search"></i>
            </button> */}
        </div>
    );
}

export default Header;