import React, {Component} from 'react';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';


export default class CalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            dates1: null,
            dates2: null
        };
    }

    render() {
        let es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        
        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar is an input component to select a date.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <h3>Basic</h3>
                            <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Icon</h3>
                            <Calendar value={this.state.date3} showIcon="true" onChange={(e) => this.setState({date3: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Restrict</h3>
                            <Calendar value={this.state.date4} minDate={minDate} maxDate={maxDate} readOnlyInput={true} onChange={(e) => this.setState({date4: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Navigators</h3>
                            <Calendar value={this.state.date5} monthNavigator="true" yearNavigator="true" yearRange="2000:2030" onChange={(e) => this.setState({date5: e.value})}></Calendar>
                        </div>
                        
                        <div className="ui-g-12 ui-md-4">
                            <h3>Multiple</h3>
                            <Calendar value={this.state.dates1} selectionMode="multiple" onChange={(e) => this.setState({dates1: e.value})}></Calendar>
                        </div>
                        
                        <div className="ui-g-12 ui-md-4">
                            <h3>Range</h3>
                            <Calendar value={this.state.dates2} selectionMode="range" onChange={(e) => this.setState({dates2: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Time</h3>
                            <Calendar value={this.state.date6} showTime="true" onChange={(e) => this.setState({date6: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Time Only</h3>
                            <Calendar value={this.state.date7} timeOnly="true" onChange={(e) => this.setState({date7: e.value})}></Calendar>
                        </div>
                        
                        <div className="ui-g-12 ui-md-4">
                            <h3>ButtonBar</h3>
                            <Calendar value={this.state.date8} showButtonBar={true} onChange={(e) => this.setState({date8: e.value})}></Calendar>
                        </div>
                                                
                    </div>
                </div>
            </div>
        );
    }
}