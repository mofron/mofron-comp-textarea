/**
 * @file mofrom-comp-textarea/index.js
 * @brief textarea component for mofron
 * @license MIT
 */
const FormItem = require("mofron-comp-formitem");
const Text     = require("mofron-comp-text");
const Font     = require("mofron-effect-font");
const cmputl = mofron.util.component;
const comutl = mofron.util.common;

module.exports = class extends FormItem {
    /**
     * initialize textarea component
     *
     * @param (mixed) 'text' parameter
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('TextArea');
	    this.shortForm('text');
	    /* init config */
	    this.confmng().add("txtbuf", { type: "string" });
	    this.confmng().add("sizeOffset",  { type: "size", init: "0.06rem" });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
             
            /* init textarea dom contents */
            let txt_ara = new mofron.class.Dom({
                tag: 'textarea', component: this,
                style: { 'font-size' : '15px' }
            });
            this.childDom().child(txt_ara);
            this.childDom(txt_ara);

            this.focusEvent((p1,p2) => {
                try {
                    let txt = p1.text();
                    if (true === p2) {
                        this.confmng("txtbuf", (null === txt) ? "" : txt);
                    } else if (txt !== this.confmng("txtbuf")) {
                        let cevt = p1.changeEvent();
                        for (let cidx in cevt) {
                            cevt[cidx].exec(p1,txt);
                        }
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            });
            
	    //this.effect(new Font({ tag: "TextArea", suspend: true }));

            /* set default */
            this.size("4rem", "2rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * textarea contents setter/getter
     * 
     * @param (string) textarea contents
     *                 undefined: call as getter
     * @return (string) textarea contents
     * @type parameter
     */
    text (prm) {
        try {
            if (undefined === prm) {
                /* getter */
		return this.childDom().props("value");
	    }
            /* setter */
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
	    }
            this.childDom().props({ value: prm });
            let chg_evt = this.changeEvent();
            for (let cidx in chg_evt) {
                chg_evt[cidx].exec(this, prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set font family
     *
     * @param (string) primary font name
     *                 undefined: call as getter
     * @param (string) secondary font name
     * @return (array) font name [primary, secondary]
     * @type parameter
     */
    font (p1, p2) {
        try {
	    this.style({ "font-family" : p1 });
            //let font = this.effect({ modname: "Font", tag: "TextArea" });
            //if (undefined === p1) {
            //    /* getter */
            //    return font.fname();
            //}
            ///* setter */
            //font.suspend(false);
            //font.fname(p1,p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * textarea contents setter/getter
     * 
     * @param (string) the same as 'text'
     * @return (string) the same as 'text'
     * @type parameter
     */
    value (prm) {
        try {
	    return this.text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * maximum input text length setter/getter
     *
     * @param (number) maximal length
     *                 undefined: call as getter
     * @return (mixed) number: maxmal length
     *                 null: not set
     * @type parameter
     */
    maxlength (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.childDom().attrs('maxlength');
            }
            /* setter */
            if ('number' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.childDom().attrs({ maxlength : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border color setter/getter
     *
     * @param (mixed (color)) string: border color name, #hex
     *                        array: [red, green, blue, (alpha)]
     *                        undefined: call as getter
     * @param (key-value) style option
     * @return (string) color
     * @type parameter
     */
    mainColor (prm,opt) {
        try {
            return cmputl.color(this,'border-color', prm, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    accentColor (prm,opt) {
        try {
            return this.mainColor(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    /**
     * clear text contents
     * 
     * @type function
     */
    clear () {
        try {
            this.text('');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    select () {
        try {
            this.childDom().getRawDom().select();
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    /**
     * focus status setter/getter
     *
     * @param (boolean) true: focus input
     *                  false: defocus input
     *                  undefined: call as getter
     * @return (boolean) focus status
     * @type parameter
     */
    focus (prm) {
        try {
            let ret = super.focus(prm);
            if ((true === prm) && (true === this.childDom().isPushed())) {
                /* setter */
                this.childDom().getRawDom().select();
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * input width setter/getter
     *
     * @param (string (size)) input width
     *                        undefined: call as getter
     * @param (key-value) style option
     * @return (mixed) string: input width
     *                 null: not set
     * @type parameter
     */
    width (prm, opt) {
        try {
	    let siz = null;
            if (undefined === prm) {
                /* getter */
		try {
                    return comutl.sizesum(super.width(), this.sizeOffset());
		} catch (e) {
                    return super.width();
		}
            }
            /* setter */
            try {
		let wid = comutl.sizediff(prm, this.sizeOffset());
	        this.rootDom()[0].style({ "width" : wid });
	        super.width(wid);
	    } catch (e) {
	        this.rootDom()[0].style({ "width" : prm });
                super.width(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * size weight value setter/getter
     * use for size calculate
     * 
     * @param (string (size)) size weight
     *                        undefined: call as getter
     * @param (string (size)) size object for weight
     * @type private
     */
    sizeOffset (prm) {
        try {
            return this.confmng("sizeOffset",  prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * textarea font-size setter/getter
     * 
     * @param (string(size)) textarea font-size
     *                       undefined: call as getter
     * @return (mixed) string(size): textarea font-size
     *                 null: not set
     */
    fontSize (prm) {
        try {
            return this.style(
                (undefined === prm) ? "font-size" : { "font-size" : prm }
	    )
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
