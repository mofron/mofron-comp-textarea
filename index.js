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
    
    /**
     * set change event
     *
     * 
     */
    afterRender () {
        try {
            let chg_evt = this.changeEvent();
            let txt_ara = this;
            this.target().getRawDom().onkeyup = () => {
                try {
                    if (null !== chg_evt) {
                        for (let idx in chg_evt) {
                            chg_evt[idx][0](txt_ara, chg_evt[idx][1]);
                        }
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
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
            if ( ('string' !== typeof val) &&
                 (true !== mf.func.isInclude(val, 'Text'))) {
                throw new Error('invalid parameter');
            }
            
            /* set contents */
            this.target().prop({
                value : ('string' === typeof val)? val : val.text()
            });
            this.target().attr({
                value : ('string' === typeof val)? val : val.text()
            });
            
            /* set text config */
            if (true === mf.func.isInclude(val, 'Text')) {
                /* set text style */
                let size = val.size();
                this.style({
                    'font-size' : ('number' === typeof size)? size + 'px' : size,
                });
                if (null !== val.color()) {
                    this.style({
                        'color' : val.color().getStyle()
                    });
                }
            }
            
            /* execute change event */
            let chg_evt = this.changeEvent();
            if (null !== chg_evt) {
                for (let idx in chg_evt) {
                    chg_evt[idx][0](this, chg_evt[idx][1]);
                }
            }
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
    
    color (prm) {
        try {
            let ret = super.color(prm);
            if (undefined === ret) {
                /* setter */
                let rgb = prm.rgba();
                rgb[0] = (0 > (rgb[0]-30)) ? 0 : rgb[0]-30;
                rgb[1] = (0 > (rgb[1]-30)) ? 0 : rgb[1]-30;
                rgb[2] = (0 > (rgb[2]-30)) ? 0 : rgb[2]-30;
                this.style({
                    'border-color' : new mf.Color(rgb[0], rgb[1], rgb[2]).getStyle()
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TextArea;
/* end of file */
