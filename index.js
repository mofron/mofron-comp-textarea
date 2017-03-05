/**
 * @file mofrom-comp-textarea/index.js
 * @author simpart
 */
require("mofron-comp-form");
require("mofron-comp-text");

/**
 * @class TextArea
 * @brief textarea component for mofron
 */
mofron.comp.TextArea = class extends mofron.comp.Form {
    /**
     * initialize button component
     *
     * @param prm_opt (string) default text value
     * @param prm_opt (object) option object of key-value
     */
    constructor (prm_opt) {
        try {
            super();
            this.name('TextArea');
            
            this.m_text   = null;
            this.m_maxlen = null;
            
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            /* init tag */
            var txtarea = new mofron.Dom('textarea');
            this.vdom().addChild(txtarea);
            this.target(txtarea);
            
            /* set default text */
            if (null !== prm) {
                if ('string' !== typeof prm) {
                    throw new Error('invalid parameter');
                }
                this.text(prm);
                this.addChild(new mofron.comp.Text(prm));
            }
            
            /* set max length */
            if (null !== this.maxLength()) {
                txtarea.attr('maxlength', '' + this.maxLength());
            }
            
            /* set default size */
            this.width(200);
            this.height(25);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mofron.func.getLength(this.style('width'));
            }
            /* setter */
            if ('number' !== (typeof val)) {
                throw new Error('invalid parameter');
            }
            this.style('width', val + 'px');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (val) {
        try {
            if (undefined === val) {
                /* getter */
                return mofron.func.getLength(this.style('height'));
            }
            /* setter */
            if ('number' != (typeof val)) {
                throw new Error('invalid parameter');
            }
            this.style('height', val + 'px');
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
mofron.comp.textarea = {};
module.exports = mofron.comp.TextArea;
