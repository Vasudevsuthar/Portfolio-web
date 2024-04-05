import React from "react";

const Work = () => {
  return (
    <section className="py-10" id="work">
      <div className="container mx-auto">
        <div className="flex-1 justify-center items-center text-center">
          <h2 className="h2 leading-tight text-accent">My Projects</h2>
          <div className="grid lg:grid-cols-2">
            <div className="bg-black/15 m-4 mx-30 p-10 px-6 rounded-xl cursor-pointer  transform duration-500 hover:scale-105 transition-transform backdrop-blur-sm">
              <h3 className="h3 mb-1 text-[#5675e8]">1. Restourent-App</h3>
              <p>
                Developed a Restaurant Web Application using React.js for online
                food ordering and table reservation. Created a dynamic and
                responsive platform allowing customers to browse menus, place
                orders, make reservations, and provide feedback.
              </p>
              <a
                href="https://restaurant-app-912de.web.app/"
                className="font-bold text-sky-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="bg-black/15 m-4 mx-30 p-10 px-6 rounded-xl  transform duration-500 hover:scale-105 transition-transform backdrop-blur-sm">
              <h3 className="h3 mb-1 text-[#5675e8]">2. Expence-Tracker</h3>
              <p>
                Developed an Expense Tracker web application using React.js to
                help users manage their finances efficiently. The application
                allows users to track their income and expenses, categorize
                transactions, and visualize spending patterns using interactive
                charts.
              </p>
              <a
                href="https://expense-tracker-a7184.web.app/"
                className="font-bold text-sky-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="bg-black/15 m-4 mx-30 p-10 px-6 rounded-xl  transform duration-500 hover:scale-105 transition-transform backdrop-blur-sm">
              <h3 className="h3 mb-1 text-[#5675e8]">3. Mail-Box</h3>
              <p>
                Developed a Mailbox Web Application using React.js for managing
                emails efficiently. Created a user-friendly interface allowing
                users to organize, send, receive, and search emails seamlessly.
              </p>
              <a
                href="https://mail-box-c03c2.web.app/"
                className="font-bold text-sky-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="bg-black/15 m-4 mx-30 p-10 px-6 rounded-xl transform duration-500 hover:scale-105 transition-transform backdrop-blur-sm">
              <h3 className="h3 mb-1 text-[#5675e8]">4. Shop-Fusion</h3>
              <p>
                Developed a feature-rich Ecommerce Web Application using
                React.js for online shopping and transaction processing.
                Designed and implemented a dynamic platform enabling customers
                to browse products, add items to cart, make purchases, and track
                orders.
              </p>
              <a
                href=""
                className="font-bold text-sky-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work in Progress
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
