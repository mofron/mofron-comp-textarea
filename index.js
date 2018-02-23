/**
 * @file mofrom-comp-textarea/index.js
 * @author simpart
 */
let mf = require('mofron');
let Form = require("mofron-comp-form");
let Text = require("mofron-comp-text");

/**
 * @class TextArea
 * @brief textarea component for mofron
 */
mofron.comp.TextArea = class extends Form {
    /**
     * initialize button component
     *
     * @param prm_opt (string) default text value
     * @param prm_opt (object) option object of key-value
     */
    constructor (po) {
        try {
            super();
            this.name('TextArea');
            
            this.m_text   = null;
            this.m_maxlen = null;
            
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (chd, idx) {
        try {
            super.addChild(chd, idx, false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            //super.initDomConts();
            this.adom().addChild(new mf.Dom('div', this));
            
            if (null !== prm) {
                this.label(prm);
            }
            this.addChild(this.label());
            
            let txtarea = new mofron.Dom('textarea');
            this.target().addChild(txtarea);
            this.target(txtarea);
            
            /* set default text */
            if (undefined !== prm) {
                this.text(prm);
            }
            
            /* set default size */
            this.width(200);
            this.height(25);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    label (val) {
        try {
            if (undefined === val) {
                /* getter */
                if (undefined === this.m_label) {
                    this.label('');
                }
                return this.m_label;
            }
            /* setter */
            if ( !( ('string' === typeof val) ||
                    (true     === mofron.func.isInclude(val, 'Text')) ) ) {
                throw new Error('invalid parameter');
            }
            
            if ('string' === typeof val) {
                if (undefined === this.m_label) {
                    this.m_label = new Text(val);
                } else {
                    this.m_label.text(val);
                }
            } else {
                if (0 !== this.child().length) {
                    this.target(this.adom().child()[0].child()[0]);
                    this.updChild(0, val);
                    this.target(this.adom().child()[0].child()[1]);
                    this.adom().child()[0].child()[0].child().pop()
                }
                this.m_label = val;
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
                if (true === this.isRendered()) {
                    return document.querySelector('#' + this.target().getId()).value;
                } else {
                    return this.m_text;
                }
            }
            /* setter */
            if ('string' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.m_text = val;
            if (true === this.isRendered()) {
                document.querySelector('#' + this.target().getId()).value = val;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    checkValue () {
        try {
            if (true === this.require()) {
                if ('' === this.value()) {
                    return "empty value";
                }
            }
            return null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    value (val) {
        try {
           if (undefined === val) {
               /* getter */
               return this.text(val);
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
                return this.m_maxlen;
            }
            /* setter */
            if ('number' !== typeof len) {
                throw new Error('invalid parameter');
            }
            this.m_maxlen = len;
            if (true === this.isRendered()) {
                this.target().attr('maxlength', '' + len);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TextArea;
