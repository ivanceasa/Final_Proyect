import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Booking = () => {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();

	const [year, setYear] = useState(null);
	const [month, setMonth] = useState(null);
	const [day, setDay] = useState(null);

	function setDate(event) {
		const dateValue = event.target.value;
		const dateSplitted = dateValue.split("-");
		setYear(dateSplitted[0]);
		setMonth(dateSplitted[1]);
		setDay(dateSplitted[2]);
	}

	async function createBooking(id) {
		console.log(id);
		const response = await fetch(`${process.env.BACKEND_URL}/api/create-booking`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				year: year,
				month: month,
				day: day,
				hostelId: id
			})
		});
	}

	return (
		<>
			<div className=" text-center mt-5">
				<h1 className="text-success text-center pt-3 font-weight-bold">
					<FormattedMessage id="booking.title" defaultMessage="Haga su reserva" />
				</h1>
				<input type="date" onChange={setDate} className=" date p-1 m-3 border border-success" />
				<i className="fas fa-calendar" />
			</div>

			<div className="text-center mb-5 m-4 pb-5">
				{store.hostels.map((item, id) => {
					if (item.name === detailsId) {
						return (
							<div key={id} className="card m-auto" style={{ width: " 750px" }}>
								<div className="row no-gutters">
									<div className="col-md-4">
										<img src={item.photo_hostel} style={{ width: " 260px", height: "280px" }} />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<ul>
												<li>
													<h5 className="card-title">
														<strong>{item.name}</strong>
													</h5>
												</li>
												<li>
													<h5>
														<FormattedMessage
															id="booking.prize"
															defaultMessage="Precio por noche: 12€"
														/>
													</h5>
												</li>
												<li>
													<h5>{`Teléfono: ${item.phone_number}`}</h5>
												</li>
												<li>
													<h6>
														<FormattedMessage
															id="booking.question"
															defaultMessage="(llámenos para cualquier consulta)"
														/>
													</h6>
												</li>
												<li>
													<p className="card-text">
														<FormattedMessage
															id="booking.p"
															defaultMessage="Para realizar una reserva en este albergue introduzca
															previamente su fecha de preferencia."
														/>
													</p>
												</li>
											</ul>

											<Link to="/checkout">
												<button
													onClick={() => {
														createBooking(item.id);
													}}
													className="btn btn-warning">
													<FormattedMessage
														id="booking.button"
														defaultMessage="Realizar reserva"
													/>
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

export default Booking;
