import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Purchases = () => {
  const URL = process.env.REACT_APP_API;
  const user = useSelector((state) => state.user);
  const [purchase, setPurchase] = useState([]);

  const stars = () => {
    const ratingNumber = Number(formData.rating);
    switch (ratingNumber) {
      case 5:
        return (
          <>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(1)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(2)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(3)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(4)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(5)}
            >
              <i class="fas fa-star"></i>
            </button>
          </>
        );
      case 4:
        return (
          <>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(1)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(2)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(3)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(4)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(5)}
            >
              <i class="far fa-star"></i>
            </button>
          </>
        );
      case 3:
        return (
          <>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(1)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(2)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(3)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(4)}
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(5)}
            >
              <i class="far fa-star"></i>
            </button>
          </>
        );
      case 2:
        return (
          <>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(1)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(2)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(3)}
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(4)}
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(5)}
            >
              <i class="far fa-star"></i>
            </button>
          </>
        );
      case 1:
        return (
          <>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(1)}
            >
              <i class="fas fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(2)}
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(3)}
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(4)}
            >
              <i class="far fa-star"></i>
            </button>
            <button
              class="material-symbols-outlined text-amber-500"
              onClick={() => handleChangeRating(5)}
            >
              <i class="far fa-star"></i>
            </button>
          </>
        );

      default:
        break;
    }
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeRating = (rate) => {
    setFormData({
      ...formData,
      rating: rate,
    });
  };
  const handleOpenPopUp = (id) => {
    console.log("id", id);
    setPopUpOpen({
      ...popUpOpen,
      value: true,
      id: id,
    }); 
  };
  const handleClosePopUp = () => {
    setPopUpOpen({
      ...popUpOpen,
      value: false,
    });
    setFormData({
      rating: 5,
      review: "",
    })
  };

  const [formData, setFormData] = useState({
    rating: 5,
    review: "",
  });

  const [popUpOpen, setPopUpOpen] = useState({
    value: false,
    id,
  });

  const handleSubmitReview = async () => {
    if (formData.review.length) {
      console.log("popipid", popUpOpen);
      const fullBody = {
        email: user.email,
        presetId: popUpOpen.id,
        ratingMessage: formData.review,
        rating: formData.rating,
      };
      console.log("fullBody", fullBody);
      // const { data } = await axios.post(`${URL}/api/review`, fullBody);
      console.log("data", data);
      // if (data.status === "success") {
      //   return showSuccessAlert("Thanks for your feedback");
      // }
    } else return showErrorAlert("We need you to enter the review and rating");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${URL}/api/shop/invoice/?email=${user.email}`
        );
        if (response.data.length) {
          const container = response.data.map((invoice) => {
            const templates = invoice.invoiceItems.map((t) => ({
              id: t.presetId,
              presetName: t.preset.presetName,
              price: t.preset.price,
              defaultColor: t.preset.defaultColor,
              type: t.preset.type,
              category: t.preset.category,
            }));

            return {
              invoice: invoice.id,
              date: invoice.createdAt,
              status: invoice.isPaid ? "Completed" : "Pending",
              templates: templates,
            };
          });

          setPurchase(container);
        }
      } catch (error) {
        console.log("ERROR: ", error);
      }
    })();
  }, [user]);

  return (
    <div className=" bg-gray-100">
      <Banner />
      <Nav />
      <div className="container mx-auto p-4 min-h-screen">
        <h1
          className="bg-[#303030] inline-block mb-4
                                w-full rounded 5ec3bf px-7 pb-2.5 pt-3
                                text-sm font-medium uppercase
                                leading-normal text-white 
                                shadow-[0_4px_9px_-4px_#000000]"
        >
          Purchases
        </h1>
        <table className="w-full">
          <thead>
            <tr className="bg-[#303030] text-white">
              <th className="border border-slate-300 ">Purchase</th>
              <th className="border border-slate-300 ">Date</th>
              <th className="border border-slate-300 ">Status</th>
              <th className="border border-slate-300 ...">Name</th>
              <th className="border border-slate-300 ...">Price</th>
              <th className="border border-slate-300 ...">Default color</th>
              <th className="border border-slate-300 ...">Type</th>
              <th className="border border-slate-300 ...">Category</th>
              <th className="border border-slate-300 ...">Review</th>
            </tr>
          </thead>

          <tbody>
            {purchase.map((row, index) => {
              console.log("row", row);
              let rowspan = row.templates.length;
              const styleRow =
                index % 2 === 0
                  ? "border border-slate-100 p-2"
                  : "border border-slate-300 p-2";
              const date = new Date(row.date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              return row.templates.map((template, templateIndex) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}
                >
                  {templateIndex === 0 && (
                    <>
                      <td rowSpan={rowspan} className={styleRow}>
                        {row.invoice}
                      </td>
                      <td rowSpan={rowspan} className={styleRow}>
                        {date}
                      </td>
                      <td rowSpan={rowspan} className={styleRow}>
                        {row.status}
                      </td>
                    </>
                  )}
                  <td className={styleRow}>{template.presetName}</td>
                  <td className={styleRow}>${template.price}</td>
                  <td className={styleRow}>{template.defaultColor}</td>
                  <td className={styleRow}>{template.type}</td>
                  <td className={styleRow}>{template.category}</td>
                  <td className={styleRow}>
                    <button
                      onClick={() => handleOpenPopUp(template.id)}
                      title="Add a review"
                      className="mt-1"
                    >
                      <span class="material-symbols-outlined">add_circle</span>
                    </button>
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
        {/*************************  FORM POPUP **********************************/}
        {popUpOpen && (
          /* Este div me muestra lo que queda en el fondo */
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
            {/* <div className="p-1 rounded-md "> */}
            <div className="mt-1">
              {/* ... Tu formulario aquí */}
              <div className="isolate w-full h-2/3 bg-gray-300 dark:bg-[#303030] rounded-md px-6 sm:py-3 lg:px-3">
                <div className="mx-auto min-w-xl max-w-xl border-b border-[#303030] dark:border-[#909090]">
                  <div className="flex justify-end">
                    <i
                      onClick={handleClosePopUp}
                      className="fa-solid fa-x text-[#909090] hover:text-[#303030] hover:dark:text-white mt-3"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-[#303030] dark:text-[#c2c2c2] sm:text-4xl  uppercase leading-normal">
                    Leave your review
                  </h2>
                  <p className="mt-2 text-sm font-medium text-[#505050] dark:text-[#c2c2c2] pb-3">
                    Please complete the following information about the
                    template.
                  </p>
                </div>
                {/* Formulario */}
                <form className="mx-auto max-w-xl mt-2" onSubmit={handleSubmitReview}>
                  {/* Formulario container */}
                  <div className="">
                    {/* rating */}
                    <div className=" flex flex-col items-start px-6">
                      <label
                        for="rating"
                        className="text-sm font-semibold text-[#303030] dark:text-[#c2c2c2] pb-2 pt-5 "
                      >
                        {" "}
                        How many stars would you give the template
                      </label>

                      <div className="grid grid-cols-5 gap-3 self-center ">
                        {stars()}
                      </div>
                    </div>
                    {/* country */}
                    <div className=" flex flex-col items-start px-5 pt-3">
                      <label
                        for="review"
                        className="text-sm font-semibold text-[#303030] dark:text-[#c2c2c2] py-2 px-1"
                      >
                        {" "}
                        Leave a brief review of the template
                      </label>
                      <textarea
                        name="review"
                        id=""
                        cols="30"
                        rows="10"
                        value={formData.review}
                        onChange={handleChange}
                        maxLength={300}
                        required
                        className="scroll- shadow appearance-none border h-32 rounded-md w-full break-all text-justify py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                      />
                      <span className="text-xs self-end text-gray-500 dark:text-gray-300">
                        {formData.review.length} / 300
                      </span>
                    </div>
                  </div>
                  {/* Botones */}
                  <div className="flex flex-col justify-center items-center mt-5 md:px-4 md:flex-row md:justify-center">
                    <button
                      type="submit"
                      className="h-10 w-11/12 
                          mt-2 bg-[#505050] rounded-md md:px-2 md:w-2/3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:text-black hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchases;
