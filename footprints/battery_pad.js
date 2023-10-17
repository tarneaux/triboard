/*
  * Battery connection pads
  */

module.exports = {
    params: {
        designator: 'D',
        plus: undefined,
        minus: undefined
    },
    body: p => `
  
    (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${''/* plus symbol */}
        (fp_line (start -3 0) (end -4 0) (layer F.SilkS) (width .1))
        (fp_line (start -3.5 -.5) (end -3.5 .5) (layer F.SilkS) (width .1))
        (fp_line (start -3 0) (end -4 0) (layer B.SilkS) (width .1))
        (fp_line (start -3.5 -.5) (end -3.5 .5) (layer B.SilkS) (width .1))

        ${''/* (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))*/}

    
        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 1.5 1.5) (layers F.Cu F.Paste F.Mask) ${p.plus.str})
        (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 1.5 1.5) (layers B.Cu B.Paste B.Mask) ${p.minus.str})
        (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 1.5 1.5) (layers B.Cu B.Paste B.Mask) ${p.plus.str})
        (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 1.5 1.5) (layers F.Cu F.Paste F.Mask) ${p.minus.str})
    )
  
    `
}
