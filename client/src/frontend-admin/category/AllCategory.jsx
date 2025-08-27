import React, { useEffect, useRef } from "react";
import Header from "../navs/HeaderSidebar";
import Sidebar from "../navs/Sidebar";

const AllCategory = () => {
  

  return (
    <>
    
    <Header/>
    <Sidebar/>
    <main id="main" className="main">
        <div className="pagetitle">
          <h1>Setting</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://bootstrapmade.com/content/demo/NiceAdmin/index.html">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">Setting</li>
              <li className="breadcrumb-item active">Home Page Setting</li>
            </ol>
          </nav>
        </div>
    <section className="section">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Datatables</h5>
              <p>
                Add lightweight datatables to your project with using the{" "}
                <a
                  href="https://github.com/fiduswriter/Simple-DataTables"
                  target="_blank"
                  rel="noreferrer"
                >
                  Simple DataTables
                </a>{" "}
                library. Just add <code>.datatable</code> class name to any table
                you wish to convert to a datatable. Check for{" "}
                <a
                  href="https://fiduswriter.github.io/simple-datatables/demos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  more examples
                </a>.
              </p>

              {/* Table with stripped rows */}
              <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                <div className="datatable-top">
                  <div className="datatable-dropdown">
                    <label>
                      <select
                        className="datatable-selector"
                        name="per-page"
                        defaultValue="10"
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="-1">All</option>
                      </select>{" "}
                      entries per page
                    </label>
                  </div>
                  <div className="datatable-search">
                    <input
                      className="datatable-input"
                      placeholder="Search..."
                      type="search"
                      name="search"
                      title="Search within table"
                    />
                  </div>
                </div>
                <div className="datatable-container">
                  <table className="table datatable datatable-table">
                    <thead>
                      <tr>
                        <th data-sortable="true">
                          <button className="datatable-sorter">
                            <b>N</b>ame
                          </button>
                        </th>
                        <th data-sortable="true">
                          <button className="datatable-sorter">Ext.</button>
                        </th>
                        <th
                          data-sortable="true"
                          aria-sort="ascending"
                          className="datatable-ascending"
                        >
                          <button className="datatable-sorter">City</button>
                        </th>
                        <th
                          data-format="YYYY/DD/MM"
                          data-sortable="true"
                          data-type="date"
                        >
                          <button className="datatable-sorter">Start Date</button>
                        </th>
                        <th data-sortable="true" className="red">
                          <button className="datatable-sorter">Completion</button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Harding Thompson</td>
                        <td>2824</td>
                        <td>Abeokuta</td>
                        <td>2008/06/08</td>
                        <td className="green">10%</td>
                      </tr>
                      <tr>
                        <td>Iola Shaw</td>
                        <td>6447</td>
                        <td>Albany</td>
                        <td>2014/05/03</td>
                        <td className="green">88%</td>
                      </tr>
                      <tr>
                        <td>Willow Gilliam</td>
                        <td>3497</td>
                        <td>Amqui</td>
                        <td>2009/29/11</td>
                        <td className="green">30%</td>
                      </tr>
                      <tr>
                        <td>Colin Burch</td>
                        <td>7457</td>
                        <td>Anamur</td>
                        <td>2004/02/01</td>
                        <td className="green">34%</td>
                      </tr>
                      <tr>
                        <td>Sylvia Peters</td>
                        <td>6829</td>
                        <td>Arrah</td>
                        <td>2015/03/02</td>
                        <td className="green">13%</td>
                      </tr>
                      <tr>
                        <td>Daryl Ayers</td>
                        <td>8276</td>
                        <td>Barchi</td>
                        <td>2012/12/11</td>
                        <td className="green">88%</td>
                      </tr>
                      <tr>
                        <td>Vivien Dominguez</td>
                        <td>5653</td>
                        <td>Bargagli</td>
                        <td>2001/09/01</td>
                        <td className="green">86%</td>
                      </tr>
                      <tr>
                        <td>Porter Nicholson</td>
                        <td>4539</td>
                        <td>Bismil</td>
                        <td>2012/22/10</td>
                        <td className="green">23%</td>
                      </tr>
                      <tr>
                        <td>Nina Rush</td>
                        <td>7567</td>
                        <td>Bo‘lhe</td>
                        <td>2008/27/01</td>
                        <td className="green">6%</td>
                      </tr>
                      <tr>
                        <td>Scarlett Hurst</td>
                        <td>1019</td>
                        <td>Brampton</td>
                        <td>2015/07/01</td>
                        <td className="green">94%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="datatable-bottom">
                  <div className="datatable-info">
                    Showing 1 to 10 of 100 entries
                  </div>
                  <nav className="datatable-pagination">
                    <ul className="datatable-pagination-list">
                      <li className="datatable-pagination-list-item datatable-hidden datatable-disabled">
                        <button
                          data-page="1"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 1"
                        >
                          ‹
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item datatable-active">
                        <button
                          data-page="1"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 1"
                        >
                          1
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="2"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 2"
                        >
                          2
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="3"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 3"
                        >
                          3
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="4"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 4"
                        >
                          4
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="5"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 5"
                        >
                          5
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="6"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 6"
                        >
                          6
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="7"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 7"
                        >
                          7
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item datatable-ellipsis datatable-disabled">
                        <button className="datatable-pagination-list-item-link">
                          …
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="10"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 10"
                        >
                          10
                        </button>
                      </li>
                      <li className="datatable-pagination-list-item">
                        <button
                          data-page="2"
                          className="datatable-pagination-list-item-link"
                          aria-label="Page 2"
                        >
                          ›
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* End Table with stripped rows */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
    </>
  );
};

export default AllCategory;
