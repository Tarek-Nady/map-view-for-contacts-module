
/** @odoo-module */

import {Component, useState, onWillStart} from "@odoo/owl"
import {standardViewProps} from "@web/views/standard_view_props"
import {useService} from "@web/core/utils/hooks"
import {LeafletMapRenderer} from "./lmap_renderer";
import {Layout} from "@web/search/layout"
import {LeafletMapModel} from "./lmap_model";

export class LeafletMapController extends Component{
    static template = 'map_view.MapView';
    static components = {LeafletMapRenderer, Layout};
    static props = {...standardViewProps,test:String,archInfo:Object};
    setup() {
        this.orm = useService("orm")
        this.model = useState(new LeafletMapModel(
            {orm: this.orm},
            this.props.resModel,
            this.props.archInfo,
        ))

        onWillStart(async ()=>{
            await this.model.load()
        })
    }
}