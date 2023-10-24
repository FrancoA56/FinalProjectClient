import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Purchases = () => {
  const URL = process.env.REACT_APP_API;
  const user = useSelector((state) => state.user);
  const [purchase, setPurchase] = useState([]);

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

  const [formData, setFormData] = useState({
    rating: "",
    review: "",
  });

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleSubmitReview = async (id) => {
    if (formData.review.length && formData.rating.length) {
      const fullBody = {
        email: user.email,
        presetId: id,
        ratingMessage: formData.review,
        rating: formData.rating,
      };
      console.log("fullBody", fullBody);
      const { data } = await axios.post(`${URL}/api/review`, fullBody);
      if (data.status === "success") {
        return showSuccessAlert("Thanks for your feedback");
      } 
    } else return showErrorAlert("We need you to enter the review and rating")
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${URL}/api/shop/invoice/?email=${user.email}`
        );
        if (response.data.length) {
          const container = response.data.map((invoice) => {
            console.log("invoice", invoice);
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
                      onClick={() => handleSubmitReview(template.id)}
                      title="Add a review"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchases;
