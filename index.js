/**
 * @file mofrom-comp-textarea/index.js
 * @author simpart
 */
let mf = require('mofron');
let FormItem = require("mofron-comp-formitem");
let Text     = require("mofron-comp-text");

/**
 * @class TextArea
 * @brief textarea component for mofron
 */
mofron.comp.TextArea = class extends FormItem {
    /**
     * initialize button component
     *
     * @param po (string) label contents
     * @param po (object) option
     */
    constructor (po) {
        try {
            super();
            this.name('TextArea');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
             
            /* init textarea dom contents */
            let txt_ara = new mofron.Dom('textarea');
            this.target().addChild(txt_ara);
            this.target(txt_ara);
            
            /* set default size */
            this.size(400, 200);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.target().prop('value');
            }
            /* setter */
            if ('string' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.target().prop({value : val});
            this.target().attr({value : val});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    textSize (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return mf.func.getLength(this.style('font-size'));
            }
            /* setter */
            this.style({
                'font-size' : ('number' === typeof prm) ? prm + 'px' : prm
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.text();
            }
            /* setter */
            this.text(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    maxLength (len) {
        try {
            if (undefined === len) {
                /* getter */
                return this.target().attr('maxlength');
            }
            /* setter */
            if ('number' !== typeof len) {
                throw new Error('invalid parameter');
            }
            this.target().attr({maxlength : len});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TextArea;
/* end of file */
