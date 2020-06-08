$(document).ready(() => {
    const order = [[0, 1, 2], [1, 2, 0], [2, 1, 0]];
    const famAbbr = [`dFam`, `sFam`, `rFam`];
    const map = [`D. Flerlage`, `J. Shea`, `R. Flerlage`];
    const startYear = 2020;
    let currentYear = 2018;

    $.get(`http://worldtimeapi.org/api/America/Chicago`, function (data) {
        currentYear = +data.datetime.slice(0, 4);
    })
        .done(function () {
            for (let i = 0; i < 10; i++) {
                genCal(currentYear + i);
            };
        }).fail(function () {
            alert(`Failed to retrieve date. Please refresh the page`);
        });


    function genCal(year) {
        const yearNumber = (year - startYear) % 3;
        const currentOrder = order[yearNumber];
        $(`.calContainer`).append(`<div class="row">
                                    <div class="col-12 year">
                                        <div class="yearHeader">
                                            ${year}
                                        </div>
                                        <div class="row quarter">
                                            <div class="col-3 month ${famAbbr[currentOrder[0]]}">
                                                <div class="monthName">January</div>
                                                ${map[currentOrder[0]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[1]]}">
                                                <div class="monthName">February</div>
                                                ${map[currentOrder[1]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[2]]}">
                                                <div class="monthName">March</div>
                                                ${map[currentOrder[2]]}
                                            </div>
                                            <div class="col-1"></div>
                                        </div>
                                        <div class="row quarter">
                                            <div class="col-3 month ${famAbbr[currentOrder[0]]}">
                                            <div class="monthName">April</div>
                                                ${map[currentOrder[0]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[1]]}">
                                                <div class="monthName">May</div>
                                                ${map[currentOrder[1]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[2]]}">
                                                <div class="monthName">June</div>
                                                ${map[currentOrder[2]]}
                                            </div>
                                            <div class="col-1"></div>
                                            </div>
                                        <div class="row quarter">
                                            <div class="col-3 month ${famAbbr[currentOrder[0]]}">
                                                <div class="monthName">July</div>
                                                ${map[currentOrder[0]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[1]]}">
                                                <div class="monthName">August</div>
                                                ${map[currentOrder[1]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[2]]}">
                                                <div class="monthName">September</div>
                                                ${map[currentOrder[2]]}
                                            </div>
                                            <div class="col-1"></div>
                                            </div>
                                        <div class="row quarter">
                                            <div class="col-3 month ${famAbbr[currentOrder[0]]}">
                                                <div class="monthName">October</div>
                                                ${map[currentOrder[0]]}
                                                </div>
                                                <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[1]]}">
                                                <div class="monthName">November</div>
                                                ${map[currentOrder[1]]}
                                            </div>
                                            <div class="col-1"></div>
                                            <div class="col-3 month ${famAbbr[currentOrder[2]]}">
                                                <div class="monthName">December</div>
                                                ${map[currentOrder[2]]}
                                            </div>
                                            <div class="col-1"></div>
                                            </div>
                                    </div>
                                </div>`)
    };
})