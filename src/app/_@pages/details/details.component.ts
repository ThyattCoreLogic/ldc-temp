import {Component, Input, OnInit} from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styles: []
})
export class DetailsComponent implements OnInit {
    @Input() actionsPanelOpen: boolean | undefined;

    public listingInfo1 = [
        { label: 'Modified Date', value: 'xx/xx/xxxx xx:xx:xx PM', violation: false},
        { label: 'List Date', value: 'xx/xx/xxxx', violation: false},
        { label: 'Entry Date', value: 'xx/xx/xxxx xx:xx:xx PM', violation: false},
        { label: 'Status Change Date', value: 'xx/xx/xxxx xx:xx:xx PM', violation: false},
        { label: 'Expiration Date', value: 'xx/xx/xxxx', violation: false},
        { label: 'Withdrawn Date', value: 'xx/xx/xxxx', violation: false},
        { label: 'Short Sale', value: 'NA', violation: false},
        { label: 'Virtual Tour', value: 'https://www.matterport.com/2984756372', violation: true},
        { label: 'Virtual Tour 2', value: 'NA', violation: false},
        { label: 'Listing Agent MLSID', value: 'C625024', violation: false},
        { label: 'Listing Office MLSID', value: 'CREEX', violation: false},
        { label: 'Listing Office ID', value: '13632727', violation: false},
        { label: 'Listing Agent Phone', value: '(xxx) xxx-xxxx)', violation: false},
        { label: 'Co-Listing Agent Name', value: 'NA', violation: false},
        { label: 'Special Information', value: 'NA', violation: false},
        { label: 'MLS No', value: '217002766', violation: false},
    ];

    public listingInfo2 = [
        { label: 'Status', value: 'Sold', violation: false},
        { label: 'Property Type', value: 'Lot & Land', violation: false},
        { label: 'Photo Count', value: '2', violation: true},
        { label: 'Image Date', value: 'xx/xx/xxxx xx:xx:xx PM', violation: false},
        { label: 'Pending Date', value: 'xx/xx/xxxx', violation: false},
        { label: 'Pending with Continence Date', value: 'xx/xx/xxxx', violation: false},
        { label: 'Seller Concession', value: 'NA', violation: false},
        { label: 'Auction', value: 'NA', violation: true},
        { label: 'Listing Agent Name', value: 'John Doe', violation: false},
        { label: 'Listing Agent Email', value: 'jdoe@email.com', violation: false},
        { label: 'Listing Office Name', value: 'Acme Realty Business', violation: false},
        { label: 'Listing Office Email', value: 'aro@email.com', violation: false},
        { label: 'Listing Agent Name', value: '(xxx) xxx-xxxx)', violation: false},
        { label: 'Co-Listing Agent Name', value: 'NA', violation: false},
        { label: 'Special Information', value: 'NA', violation: false},
        { label: 'Agent ID', value: '1362963', violation: false},
    ];

    public publicRecords = [
        { label: 'Tax ID', mlsValue: '24-43-22-C4-05426.0650', prValue: '24-43-22-C4-05426.0650'},
        { label: 'Street Number', mlsValue: 'XXXX', prValue: 'XXXX'},
        { label: 'Street Direction', mlsValue: 'North', prValue: 'North'},
        { label: 'Street Name', mlsValue: 'Battleground', prValue: 'Battleground'},
        { label: 'Street Type', mlsValue: 'Drive', prValue: 'Drive'},
        { label: 'Street Direction Suffix', mlsValue: 'NA', prValue: 'NA'},
        { label: 'Unit Number', mlsValue: 'NA', prValue: 'NA'},
        { label: 'City', mlsValue: 'Anytown', prValue: 'Anytown'},
        { label: 'State', mlsValue: 'NC', prValue: 'NC'},
        { label: 'Zip Code', mlsValue: 'xxxxx', prValue: 'xxxxx'},
        { label: 'County', mlsValue: 'Guilford', prValue: 'Guilford'},
        { label: 'Parcel ID', mlsValue: 'xxx-xxx-xx', prValue: 'xxx-xxx-xx'},
        { label: 'Sale Price', mlsValue: '100,000', prValue: '100,000'},
        { label: 'Sale Date', mlsValue: 'xx/xx/xxxx', prValue: 'xx/xx/xxxx'},
        { label: 'Total Sq Ft', mlsValue: 'xxxx', prValue: 'xxxx'},
    ];

    public violations = [
        {
            violation: 'Unbranded VR Tour URL',
            violationId: 'xxxxxxxxx',
            detectedBy: 'System',
            agent: 'Greg Herring',
            agentId: '1995137',
            state: 'Immediate Fined Completed',
            fineAmount: '$200',
            fineDate: 'xx/xx/xxxx',
            fineCode: '2205-26',
            graceDate: 'NA',
        },
        {
            violation: 'Unbranded VR Tour URL',
            violationId: 'xxxxxxxxx',
            detectedBy: 'System',
            agent: 'Greg Herring',
            agentId: '1995137',
            state: 'Immediate Fined Completed',
            fineAmount: '$200',
            fineDate: 'xx/xx/xxxx',
            fineCode: '2205-26',
            graceDate: 'NA',
        },
    ];

    constructor() {
        this.actionsPanelOpen = true;
    }

    ngOnInit(): void {
        $('[data-action="tooltip"]').tooltip();
    }

}
