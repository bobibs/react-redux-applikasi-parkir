import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import from action
import { BiayaMobil, BiayaMotor } from '../redux/actions';

class Homepage extends Component {
	state = {
		button: 0
	};

	mobilButton = () => {
		this.setState({
			button: -1
		});
	};

	motorButton = () => {
		this.setState({
			button: 1
		});
	};

	parkirMobil = () => {
		const durasi = this.refs.durasi.value;
		this.props.BiayaMobil(parseInt(durasi));
		this.refs.durasi.value = '';
		this.setState({
			button: 0
		});
	};

	parkirMotor = () => {
		const durasi = this.refs.durasi.value;
		this.props.BiayaMotor(parseInt(durasi));
		this.refs.durasi.value = '';
		this.setState({
			button: 0
		});
	};

	render() {
		return (
			<div className='container mt-3 text-center'>
				<h1>Aplikasi Parkir</h1>
				<div className='d-flex justify-content-center mt-5'>
					<div className='form-group mr-2'>
						<button
							onClick={this.mobilButton}
							className='btn btn-sm btn-primary form-control'>
							Mobil
						</button>
					</div>
					<div className='form-group'>
						<button
							onClick={this.motorButton}
							className='btn btn-sm btn-warning form-control'>
							Motor
						</button>
					</div>
				</div>
				<center>
					<div className='form-group' style={{ width: '205px' }}>
						<input type='number' className='form-control' ref='durasi' />
					</div>
					<div className='form-group' style={{ width: '100px' }}>
						<button
							onClick={this.state.button === -1 ? this.parkirMobil : this.parkirMotor}
							className='btn btn-sm btn-danger form-control'>
							Cek Biaya
						</button>
					</div>
					<h3 className='mt-5'>Biaya Parkir</h3>
					<h5
						style={{ border: '1px solid #777', width: '200px' }}
						className='mt-3 py-1'>
						Rp {this.props.biaya}
					</h5>
				</center>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		biaya: state.counter
	};
};

export default connect(mapStateToProps, {
	BiayaMobil,
	BiayaMotor
})(Homepage);
