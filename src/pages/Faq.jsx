import React from "react";

const Faq = () => {
  return (
    <div className="faq py-5">
      <div className="container-fluid">
        <div className=" p-md-5 mb-4 rounded bg-body-secondary header d-flex justify-content-center">
          <div className="col-lg-6 py-2 about-col d-flex justify-content-center align-items-center">
            <h1 className="display-4 fst-italic text-center">
              <p>Frequently Asked Questions</p>
            </h1>
          </div>
        </div>
        <div className="row five g-0 py-4" id="faq">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <div className="w-75 py-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What types of furniture do you offer?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We offer a wide range of furniture, including sofas,
                          dining sets, tables, chairs and so on. Whether you’re
                          looking for modern, classic, or minimalist designs, we
                          have something to suit every taste.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How can I place an order?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          You can place an order directly through our website by
                          adding items to your cart and proceeding to checkout.
                          If you need assistance, our customer support team is
                          happy to help you over the phone or via email.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How long does delivery take?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Standard delivery typically takes 5-10 business days.
                          Custom or made-to-order items may take longer,
                          depending on production times. You’ll receive a
                          tracking number once your order is shipped.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How do I care for my furniture?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Each product comes with specific care instructions.
                          Generally, we recommend using mild cleaning solutions
                          and avoiding direct sunlight to prevent fading. For
                          detailed care tips, check our Furniture Care Guide on
                          the website.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Do you offer international shipping?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                        Yes, we ship internationally! Shipping costs and delivery times vary depending on the destination. Contact us for specific information regarding international orders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
