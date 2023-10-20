module.exports = {
  params: {
    designator: 'xiao-ble',
    VCC5: {type: 'net', value: 'VCC5'},
    GND: {type: 'net', value: 'GND'},
    VCC3: {type: 'net', value: 'VCC3'},
    RST: {type: 'net', value: 'RST'},
    RAW: {type: 'net', value: 'RAW'},
    NFC0: {type: 'net', value: 'NFC0'},
    NFC1: {type: 'net', value: 'NFC1'},
    CLK: {type: 'net', value: 'CLK'},
    DIO: {type: 'net', value: 'DIO'},
    P0: {type: 'net', value: 'P0'},
    P1: {type: 'net', value: 'P1'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
    P9: {type: 'net', value: 'P9'},
    P10: {type: 'net', value: 'P10'}
  },
  body: p => {
    return `
  (footprint "xiao-ble" (layer "F.Cu")
    (tstamp e731e554-812f-475b-93b0-e9f8c721c2a8)
    ${p.at /* parametric position */}
    (attr through_hole)
    (fp_text reference "${p.ref}" (at -20.406 -9.144 ${p.rot + 90}) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      (tstamp c9799749-dfc5-46b5-96e7-38214028eb92)
    )
    (fp_text value "ProMicro" (at 12.36 -8.89 ${p.rot + 90}) (layer "F.Fab") hide
        (effects (font (size 1 1) (thickness 0.15)))
      (tstamp d6785958-95ae-4f67-acdc-1f88e74beecf)
    )
    (fp_circle (center -18.12 -9.652) (end -17.995 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 638427b7-42f9-454f-bba9-8a7f9f217e1b))
    (fp_circle (center -18.12 -8.128) (end -17.995 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 75b8788b-b3d2-49ee-af5a-cc1d17cf0bf1))
    (fp_circle (center -15.58 -9.652) (end -15.455 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 2b81547f-5d62-476b-b662-4c32bb167dcc))
    (fp_circle (center -15.58 -8.128) (end -15.455 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 66183110-858e-4b91-94d7-7cc340ae6e46))
    (fp_circle (center -13.04 -9.652) (end -12.915 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 5a750adc-413c-4205-ae2a-85907a4e60c9))
    (fp_circle (center -13.04 -8.128) (end -12.915 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 118377e1-1884-4599-96d3-3ca2164ef921))
    (fp_circle (center -10.5 -9.652) (end -10.375 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp ca6d7af7-ba4e-4e74-bfa3-fc1a5a45694c))
    (fp_circle (center -10.5 -8.128) (end -10.375 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 4896e640-3627-4514-9874-3c67236f6ee5))
    (fp_circle (center -7.96 -9.652) (end -7.835 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp c8c7e73e-3e26-4ab1-91b2-d1c6b98e1132))
    (fp_circle (center -7.96 -8.128) (end -7.835 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 65c33fb6-aee7-4b14-96f7-65638c4fb2d6))
    (fp_circle (center -5.42 -9.652) (end -5.295 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp a937ad80-83d8-469d-8080-138d600a3d08))
    (fp_circle (center -5.42 -8.128) (end -5.295 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 4db9660c-6f3c-4bfa-b332-b49723766161))
    (fp_circle (center -2.88 -9.652) (end -2.755 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp eaa13b86-b2de-4ce4-95aa-65e3685e4ec4))
    (fp_circle (center -2.88 -8.128) (end -2.755 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "B.Mask") (tstamp 2cff1c62-3797-4c3c-8fa3-0cee9f968cc7))
    (fp_poly
      (pts
        (xy -18.628 -3.81)
        (xy -17.612 -3.81)
        (xy -17.612 -2.794)
        (xy -18.628 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 64f1dbf2-eb38-466b-90ea-b30beb57049b))
    (fp_poly
      (pts
        (xy -17.612 -13.97)
        (xy -18.628 -13.97)
        (xy -18.628 -14.986)
        (xy -17.612 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 53ab187f-1c58-4419-8b09-5f7052b17471))
    (fp_poly
      (pts
        (xy -16.088 -3.81)
        (xy -15.072 -3.81)
        (xy -15.072 -2.794)
        (xy -16.088 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 05058cbb-714a-41e3-b83a-ba5026187bda))
    (fp_poly
      (pts
        (xy -15.072 -13.97)
        (xy -16.088 -13.97)
        (xy -16.088 -14.986)
        (xy -15.072 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 03ada9e0-933e-4941-897f-92d02fbd7dbb))
    (fp_poly
      (pts
        (xy -13.548 -3.81)
        (xy -12.532 -3.81)
        (xy -12.532 -2.794)
        (xy -13.548 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp b66e71f1-e370-48e5-8d13-c4bf05bdd2fe))
    (fp_poly
      (pts
        (xy -12.532 -13.97)
        (xy -13.548 -13.97)
        (xy -13.548 -14.986)
        (xy -12.532 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 9a31767e-7b24-4aea-b307-0e247b3ae291))
    (fp_poly
      (pts
        (xy -11.008 -3.81)
        (xy -9.992 -3.81)
        (xy -9.992 -2.794)
        (xy -11.008 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 03ae1694-cf28-4213-b500-e0c80a832262))
    (fp_poly
      (pts
        (xy -9.992 -13.97)
        (xy -11.008 -13.97)
        (xy -11.008 -14.986)
        (xy -9.992 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 2675566d-8331-4623-a935-243566fdb8e5))
    (fp_poly
      (pts
        (xy -8.468 -3.81)
        (xy -7.452 -3.81)
        (xy -7.452 -2.794)
        (xy -8.468 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp cdfa7e21-6de2-4718-b832-e49237a7c230))
    (fp_poly
      (pts
        (xy -7.452 -13.97)
        (xy -8.468 -13.97)
        (xy -8.468 -14.986)
        (xy -7.452 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp c17d54de-08ad-41ae-82bc-bcaf10baa2b3))
    (fp_poly
      (pts
        (xy -5.928 -3.81)
        (xy -4.912 -3.81)
        (xy -4.912 -2.794)
        (xy -5.928 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 736e8591-0d85-4da5-b127-c98be66f18b0))
    (fp_poly
      (pts
        (xy -4.912 -13.97)
        (xy -5.928 -13.97)
        (xy -5.928 -14.986)
        (xy -4.912 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp bf40ff81-55f2-4f44-8502-bfc81ead499c))
    (fp_poly
      (pts
        (xy -3.388 -3.81)
        (xy -2.372 -3.81)
        (xy -2.372 -2.794)
        (xy -3.388 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp e93b8fc1-ffb3-469f-9297-1159f8abf51d))
    (fp_poly
      (pts
        (xy -2.372 -13.97)
        (xy -3.388 -13.97)
        (xy -3.388 -14.986)
        (xy -2.372 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 2e3ec620-bd9d-40e5-954d-ee6cf49dbc7d))
    (fp_circle (center -18.12 -9.652) (end -17.995 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 526eb95c-fe08-4450-9508-830f31f995bb))
    (fp_circle (center -18.12 -8.128) (end -17.995 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp f9532315-6989-4427-a190-3271cb6c04ac))
    (fp_circle (center -15.58 -9.652) (end -15.455 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 1fddfc1e-c060-4911-aee9-e3edf70542b7))
    (fp_circle (center -15.58 -8.128) (end -15.455 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 9a869089-d269-4a1e-8fe5-cec098f9fd9b))
    (fp_circle (center -13.04 -9.652) (end -12.915 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp f9a186d1-670d-4394-b21c-f48ade309079))
    (fp_circle (center -13.04 -8.128) (end -12.915 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 56c62488-6670-4187-8c05-f9f4a6a18033))
    (fp_circle (center -10.5 -9.652) (end -10.375 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp d2e927fa-b573-4191-8b33-27c2219188f6))
    (fp_circle (center -10.5 -8.128) (end -10.375 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 4eb35eaf-ae05-47ff-9624-e284d367e751))
    (fp_circle (center -7.96 -9.652) (end -7.835 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp c50f90d5-6776-4fe0-813e-e57533bab8d7))
    (fp_circle (center -7.96 -8.128) (end -7.835 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 6b02e404-6d38-4939-a4cc-56a810a361e9))
    (fp_circle (center -5.42 -9.652) (end -5.295 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 8422554a-d10e-4a96-968f-f2e6f8534b08))
    (fp_circle (center -5.42 -8.128) (end -5.295 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 6e3076f8-55e5-404a-8671-335fd84bd3a3))
    (fp_circle (center -2.88 -9.652) (end -2.755 -9.652)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 3c94600f-f290-4e54-8f75-a4eac5fc4343))
    (fp_circle (center -2.88 -8.128) (end -2.755 -8.128)
      (stroke (width 0.25) (type solid)) (fill none) (layer "F.Mask") (tstamp 0f07bd82-4671-4dd4-8781-ef3de696b589))
    (fp_poly
      (pts
        (xy -18.628 -3.81)
        (xy -17.612 -3.81)
        (xy -17.612 -2.794)
        (xy -18.628 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp f587cb7e-b104-4495-98d3-f2b27402eb69))
    (fp_poly
      (pts
        (xy -17.612 -13.97)
        (xy -18.628 -13.97)
        (xy -18.628 -14.986)
        (xy -17.612 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 839d216f-5cbb-4c1d-bfd8-922398a0e2e3))
    (fp_poly
      (pts
        (xy -16.088 -3.81)
        (xy -15.072 -3.81)
        (xy -15.072 -2.794)
        (xy -16.088 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp ee845203-4d07-4de9-bdc5-2c8dd0f65587))
    (fp_poly
      (pts
        (xy -15.072 -13.97)
        (xy -16.088 -13.97)
        (xy -16.088 -14.986)
        (xy -15.072 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 2f5ee62c-8fa2-4fbf-bbe4-e1d1036f6211))
    (fp_poly
      (pts
        (xy -13.548 -3.81)
        (xy -12.532 -3.81)
        (xy -12.532 -2.794)
        (xy -13.548 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp a2726d09-1db1-4221-99cf-262dc7cc8c97))
    (fp_poly
      (pts
        (xy -12.532 -13.97)
        (xy -13.548 -13.97)
        (xy -13.548 -14.986)
        (xy -12.532 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 6eb48653-1205-44c5-ac9c-47158a811d1e))
    (fp_poly
      (pts
        (xy -11.008 -3.81)
        (xy -9.992 -3.81)
        (xy -9.992 -2.794)
        (xy -11.008 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp fa40c6f9-7f64-4439-a0d6-163593a1ca9b))
    (fp_poly
      (pts
        (xy -9.992 -13.97)
        (xy -11.008 -13.97)
        (xy -11.008 -14.986)
        (xy -9.992 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 8a491191-94f6-4b1f-a734-37558324e466))
    (fp_poly
      (pts
        (xy -8.468 -3.81)
        (xy -7.452 -3.81)
        (xy -7.452 -2.794)
        (xy -8.468 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 6fcbbbed-1e48-4aa7-854c-ef37195ca3da))
    (fp_poly
      (pts
        (xy -7.452 -13.97)
        (xy -8.468 -13.97)
        (xy -8.468 -14.986)
        (xy -7.452 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 33af95b7-18d7-43d4-982d-670435a82321))
    (fp_poly
      (pts
        (xy -5.928 -3.81)
        (xy -4.912 -3.81)
        (xy -4.912 -2.794)
        (xy -5.928 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 7056b0ff-d02c-4bbe-b972-69843e3d912d))
    (fp_poly
      (pts
        (xy -4.912 -13.97)
        (xy -5.928 -13.97)
        (xy -5.928 -14.986)
        (xy -4.912 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 4ec3bd05-7184-4484-a78e-3e848a0934d4))
    (fp_poly
      (pts
        (xy -3.388 -3.81)
        (xy -2.372 -3.81)
        (xy -2.372 -2.794)
        (xy -3.388 -2.794)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp f453556f-3a14-40ce-93ec-3473eb045bc9))
    (fp_poly
      (pts
        (xy -2.372 -13.97)
        (xy -3.388 -13.97)
        (xy -3.388 -14.986)
        (xy -2.372 -14.986)
      )

      (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp d6fe5db7-f825-4225-a700-194275d7b8ba))
    (fp_rect (start -21.349813 -12.240197) (end -18.682813 -14.018197)
      (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 77763937-d2f3-46ca-995a-fa9c95252770))
    (fp_rect (start -18.682813 -5.382189) (end -21.349813 -3.604189)
      (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp a25b5b35-b041-4361-817d-df7e4a7ab402))
    (fp_rect (start -17.285813 -12.240197) (end -14.618813 -14.018197)
      (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp c7e3850f-f271-42e3-b017-585b2cf567fa))
    (fp_rect (start -17.285813 -3.604189) (end -14.618813 -5.382189)
      (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp 226df71e-0712-443d-bfd3-95357b7c640d))
    (fp_rect (start 0 0) (end -21 -17.78)
      (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User") (tstamp ad650378-54fe-4e47-a0a1-ae5724207bc3))
    (pad "" thru_hole circle (at -18.12 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp ba0109dc-fbe9-41aa-98f7-3a8b2b4cf1a0))
    (pad "" smd custom (at -18.12 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 08b0e0e8-37be-43fb-9e91-33204ae7452d))
    (pad "" smd custom (at -18.12 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp f9905642-e11c-46f1-aa99-91d025ca0d53))
    (pad "" smd custom (at -18.12 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp c57f1903-7cc0-4d62-85d2-f82c8943ddec))
    (pad "" smd custom (at -18.12 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 8983cfbb-07a1-4e10-bc83-08783c17390c))
    (pad "" smd custom (at -18.12 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 077b5855-2640-4f52-83e3-0a1ff2368735))
    (pad "" smd custom (at -18.12 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp ddca0075-623c-4436-a963-c110e97f2756))
    (pad "" smd custom (at -18.12 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp ab83aee3-e4ce-4c17-af4d-8dc71a6d531a))
    (pad "" smd custom (at -18.12 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 868e8c91-0ded-4fbb-bef2-277e1efc1243))
    (pad "" thru_hole circle (at -18.12 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask")
      (zone_connect 0) (tstamp 9e8bd8da-db8d-48f3-9451-1b27ddacd628))
    (pad "" thru_hole circle (at -15.58 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 6f35f54e-9d7e-4e5e-a0a1-5bdda0ed6630))
    (pad "" smd custom (at -15.58 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp c851c36c-bee5-4385-a35d-0f6b891d9f59))
    (pad "" smd custom (at -15.58 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 4ad76cca-8b8b-4ad0-94a0-c8899ad83ee5))
    (pad "" smd custom (at -15.58 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp bb33ff41-3903-46ef-a36b-58b62d6d8b9c))
    (pad "" smd custom (at -15.58 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 4b83ab73-cd38-464d-a134-7b538be8d379))
    (pad "" smd custom (at -15.58 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 819d5171-e333-44d5-8408-c4868f55dd2f))
    (pad "" smd custom (at -15.58 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 18b69357-7a1a-4170-ab72-ba7ef22c72e3))
    (pad "" smd custom (at -15.58 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 1e1c4162-1b89-49df-bbc9-456ca4759f0a))
    (pad "" smd custom (at -15.58 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 57644ddd-226a-4515-b3e4-eccdc5322267))
    (pad "" thru_hole circle (at -15.58 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 3c5dd638-2aa2-43b2-a120-1f505754462a))
    (pad "" thru_hole circle (at -13.04 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 15e13437-774e-449c-87c8-dabcaf9ae7d1))
    (pad "" smd custom (at -13.04 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp a42a64e0-8518-4fad-919f-7927557b4e44))
    (pad "" smd custom (at -13.04 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 8b4eb5ec-48bb-4936-b036-ceda99055fed))
    (pad "" smd custom (at -13.04 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp ad287322-231f-4093-9a87-72900ba8a0e5))
    (pad "" smd custom (at -13.04 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 502c77e4-5d69-49de-807b-bf10f1413530))
    (pad "" smd custom (at -13.04 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 1c24cc8e-b28f-4cf9-8ba1-79c184fbe189))
    (pad "" smd custom (at -13.04 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp d7e069ff-4a11-4a8d-ab95-56b42c264380))
    (pad "" smd custom (at -13.04 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 1796217f-5bb8-4203-a98d-88e36ee28feb))
    (pad "" smd custom (at -13.04 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp b4c83a6b-25dc-4431-915b-cab796d3c203))
    (pad "" thru_hole circle (at -13.04 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 9401c80a-1ce9-42df-b1be-8a54c7220af0))
    (pad "" thru_hole circle (at -10.5 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp e525b7d3-f734-4243-aeea-ba88dbfaf04a))
    (pad "" smd custom (at -10.5 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 1b68578e-88ad-4d2b-a1a3-a86b171217f0))
    (pad "" smd custom (at -10.5 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 8681de9d-ae0e-4211-b346-bbaf7e96b158))
    (pad "" smd custom (at -10.5 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 1e429044-d129-467e-b1d1-771ade179331))
    (pad "" smd custom (at -10.5 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 06a6be1e-7a70-4311-b626-7b6ae238db7b))
    (pad "" smd custom (at -10.5 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp b7a9728c-3d3e-4cdf-83fa-1704cd95fdd8))
    (pad "" smd custom (at -10.5 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp c5b3192b-0b4e-44ae-9658-7b589221c9b5))
    (pad "" smd custom (at -10.5 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp f1b72e26-05db-4414-8d0f-62629af76192))
    (pad "" smd custom (at -10.5 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 30cece87-b96a-46bf-887b-24745dc8c6e0))
    (pad "" thru_hole circle (at -10.5 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 54a478aa-5689-4800-9797-a013fb3ba14c))
    (pad "" thru_hole circle (at -7.96 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 7c39c673-3d85-4de6-912f-e0e047fd5228))
    (pad "" smd custom (at -7.96 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 9276b41f-91cb-40ad-a9b0-eb181718a30b))
    (pad "" smd custom (at -7.96 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 4be4023f-0aab-468a-8359-3163e37e15a6))
    (pad "" smd custom (at -7.96 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 2c75ec50-b7ca-499b-b5b4-250fd32ebf8c))
    (pad "" smd custom (at -7.96 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp cfe83115-17ca-4fca-9549-d4a7d1dcc06f))
    (pad "" smd custom (at -7.96 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp d777074c-c9dc-452d-9845-2f810b97ff29))
    (pad "" smd custom (at -7.96 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp c5b2e832-3b9a-412a-9caa-878d322198c2))
    (pad "" smd custom (at -7.96 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp c44e5459-d85f-4fa5-be58-7e12055a6d87))
    (pad "" smd custom (at -7.96 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 7038946b-b34e-43ab-b823-551d3b37d94c))
    (pad "" thru_hole circle (at -7.96 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 169e50f3-32a7-4f06-b488-7882ae4a3657))
    (pad "" thru_hole circle (at -5.42 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp 2e9d3dd5-147a-4c39-af68-ef863e422f7b))
    (pad "" smd custom (at -5.42 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 74957dff-838b-42f5-be36-71894a42f7c6))
    (pad "" smd custom (at -5.42 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 50a3a2e6-0883-4808-9ba6-808aded40a04))
    (pad "" smd custom (at -5.42 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 6108bc9f-ec0f-44a1-9a46-ae972bff01f8))
    (pad "" smd custom (at -5.42 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp f5b3af8c-1ccb-4d9e-9524-e76fd07a90bc))
    (pad "" smd custom (at -5.42 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 48a4b4a1-8266-409c-ba0d-961799a0bd09))
    (pad "" smd custom (at -5.42 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp c73cd1a7-811c-413c-8ed9-8eb53bda8bce))
    (pad "" smd custom (at -5.42 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 0dda6768-b9c9-44a6-aca8-caf687239c63))
    (pad "" smd custom (at -5.42 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 0610822a-35cf-4809-80d6-5d2bc134df2f))
    (pad "" thru_hole circle (at -5.42 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp d9821f8d-b030-44d2-9b77-e8eabe48171f))
    (pad "" thru_hole circle (at -2.88 -16.51 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp ecfe2ac1-d831-4b5a-a659-c93e69b14eb8))
    (pad "" smd custom (at -2.88 -15.24 ${p.rot}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 43081819-0142-4f37-8959-d96868ad1cd9))
    (pad "" smd custom (at -2.88 -15.24 ${p.rot}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp db4f100b-5bb7-4c46-a240-0a0eb0ff7afa))
    (pad "" smd custom (at -2.88 -14.732 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp affc104d-6c4f-415d-8948-97187753c718))
    (pad "" smd custom (at -2.88 -14.732 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp d0a30d6d-70c7-45e6-8829-c088d98c4ac7))
    (pad "" smd custom (at -2.88 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp 1c69f43c-ec2e-44aa-bbf6-f9432591ed77))
    (pad "" smd custom (at -2.88 -3.048 ${p.rot + 180}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 -0.4)
            (xy -0.6 -0.4)
            (xy -0.6 -0.2)
            (xy 0 0.4)
            (xy 0.6 -0.2)
          )
          (width 0) (fill yes))
      ) (tstamp be46f46b-4c10-4f0a-a1e9-cf76cf5e5515))
    (pad "" smd custom (at -2.88 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "F.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 77080f90-592b-49e7-bca7-ed9c6bb7359e))
    (pad "" smd custom (at -2.88 -2.54 ${p.rot + 180}) (size 0.25 1) (layers "B.Cu")
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ) (tstamp 76d94b92-24e7-4b43-887e-2b2bd2c2b604))
    (pad "" thru_hole circle (at -2.88 -1.27 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers "*.Cu" "*.Mask") (tstamp d5e16b15-a54b-4a2d-8668-0692fdc42334))
    (pad "1" smd custom (at -18.12 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 5e1f030a-3b18-401e-8a68-14595a68b0c3) ${p.VCC5.str})
    (pad "1" smd custom (at -18.12 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp 2efc83f4-285f-47ce-adf6-e792a114f64b) ${p.VCC5.str})
    (pad "1" smd custom (at -18.12 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp e640228f-f683-4383-a092-1dd93116f7da) ${p.VCC5.str})
    (pad "1" thru_hole circle (at -18.12 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp effd7922-1191-437a-9ad5-2241b3cbd401) ${p.VCC5.str})
    (pad "1" smd custom (at -18.12 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 852d75f1-00f3-44fa-8fe4-0fba0899a2d4))
    (pad "2" smd custom (at -15.58 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 0e1dafa7-5e42-4b14-a03e-183b7d3ebfa3) ${p.GND.str})
    (pad "2" smd custom (at -15.58 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp 24c15d5d-f560-49ac-9065-f3b39fc2dc44) ${p.GND.str})
    (pad "2" smd custom (at -15.58 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 27f6d5de-58fb-4540-b826-698a9cf3177d) ${p.GND.str})
    (pad "2" thru_hole circle (at -15.58 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 86ddba8f-bdbc-4199-a5d3-72a1aff17748) ${p.GND.str})
    (pad "2" smd custom (at -15.58 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 528489b6-9ede-4550-93e2-8452e76698a3))
    (pad "3" smd custom (at -13.04 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 6a09b99f-ee36-4d4c-aaa4-823605c643c7) ${p.VCC3.str})
    (pad "3" smd custom (at -13.04 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp 336fe033-9d06-4e6e-b30d-76e2b29c6977) ${p.VCC3.str})
    (pad "3" smd custom (at -13.04 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp d97f5ce2-264e-4723-90d9-3b1770a77486) ${p.VCC3.str})
    (pad "3" thru_hole circle (at -13.04 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 1471df66-5ff7-4a36-a993-ba6c2063ea4c) ${p.VCC3.str})
    (pad "3" smd custom (at -13.04 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp d092bc49-0cbc-4a1c-a6b0-f594e1053f6e))
    (pad "4" smd custom (at -10.5 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp d3cbba1d-0fcb-4266-91c3-6b4e461465ef) ${p.P10.str})
    (pad "4" smd custom (at -10.5 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp acbe51a9-9f68-4090-a06b-db4fc83d1d42) ${p.P10.str})
    (pad "4" smd custom (at -10.5 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 42a5335a-7f70-4a93-8916-8bdc7efb086b) ${p.P10.str})
    (pad "4" thru_hole circle (at -10.5 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 0e229b9b-4845-4dee-9cfd-76abcb7712b0) ${p.P10.str})
    (pad "4" smd custom (at -10.5 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 3a99d5de-4e5d-47de-a98f-105bfa33a3e2))
    (pad "5" smd custom (at -7.96 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 35e3ace4-5fe0-43ab-9eb9-b2e8a836f6bc) ${p.P9.str})
    (pad "5" smd custom (at -7.96 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp 114d8172-8a19-4db6-9346-24f675a68693) ${p.P9.str})
    (pad "5" smd custom (at -7.96 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp eecc3a37-e8c0-4c56-9d2f-28d69fdbd8b9) ${p.P9.str})
    (pad "5" thru_hole circle (at -7.96 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 346eaf32-1de4-46f2-bfac-9a74a681dd59) ${p.P9.str})
    (pad "5" smd custom (at -7.96 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 9d455f3f-b71e-45be-9b33-33404a59a0ca))
    (pad "6" smd custom (at -5.42 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 17456729-089c-4d80-927c-6fa6d7f8305e) ${p.P8.str})
    (pad "6" smd custom (at -5.42 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp 73039b20-b2bb-48af-b3e8-15c9caaab0ba) ${p.P8.str})
    (pad "6" smd custom (at -5.42 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 42e64d66-b6a9-42e3-88ab-bc3a38e58409) ${p.P8.str})
    (pad "6" thru_hole circle (at -5.42 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 05fb03b7-9dbf-4f4f-b766-fd0b534ed10d) ${p.P8.str})
    (pad "6" smd custom (at -5.42 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 2ed1d378-8d58-4fed-82b7-067e3cba870e))
    (pad "7" smd custom (at -2.88 -13.716 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 694825bf-448a-476a-8960-814e9b70c9f3) ${p.P7.str})
    (pad "7" smd custom (at -2.88 -9.652 ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) (tstamp 172160fa-a95e-47c4-a20e-3457cded091c) ${p.P7.str})
    (pad "7" smd custom (at -2.88 -9.652 ${p.rot}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 777d1c82-5f2d-48be-8cc2-b72602479035) ${p.P7.str})
    (pad "7" thru_hole circle (at -2.88 -9.652 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp c69be33f-8776-4bdd-8608-791fbaa6b84a) ${p.P7.str})
    (pad "7" smd custom (at -2.88 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 64511f73-762f-4bed-86af-5404473e9e29))
    (pad "18" smd custom (at -2.88 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 0fd425fa-8963-4f21-9a1f-0bf3446bf215) ${p.P6.str})
    (pad "18" smd custom (at -2.88 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp 2655209b-86bc-4b8b-b5d4-cba2d9bfe9a4) ${p.P6.str})
    (pad "18" smd custom (at -2.88 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp fd3bf8d1-eb00-451b-89d0-56484f5c866c) ${p.P6.str})
    (pad "18" thru_hole circle (at -2.88 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp a17c56a7-5e49-4b45-84b3-1bf64f7c449e) ${p.P6.str})
    (pad "18" smd custom (at -2.88 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp f6134ff8-bc85-40a9-9aa1-599b0b692107))
    (pad "19" smd custom (at -5.42 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp d9f2a549-2e01-44d2-a846-d7252fa4da39) ${p.P5.str})
    (pad "19" smd custom (at -5.42 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp ba4401d7-3645-439b-a08e-b63e7f29811c) ${p.P5.str})
    (pad "19" smd custom (at -5.42 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 0008dbfc-4a62-4e72-99a2-adf28713b46d) ${p.P5.str})
    (pad "19" thru_hole circle (at -5.42 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 2023ccd8-3864-4668-85f1-71a3b2de48fc) ${p.P5.str})
    (pad "19" smd custom (at -5.42 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 1a5e78db-f4b2-47e3-bb29-b7394f413e9e))
    (pad "20" smd custom (at -7.96 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 1f983efb-f8d1-480e-b284-ea3ad7fc1b50) ${p.P4.str})
    (pad "20" smd custom (at -7.96 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp 0dafc189-b4f8-490a-ab75-2403420ae1f2) ${p.P4.str})
    (pad "20" smd custom (at -7.96 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 2580a042-d109-4f47-ac5f-474f8d70251d) ${p.P4.str})
    (pad "20" thru_hole circle (at -7.96 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 5ff76348-2d4f-4ce5-ac71-86b629c3b535) ${p.P4.str})
    (pad "20" smd custom (at -7.96 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 9a337309-059a-4357-8f75-9e90cf1d5625))
    (pad "21" smd custom (at -10.5 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 4678309b-54e2-4635-b92c-93153ae1a28c) ${p.P3.str})
    (pad "21" smd custom (at -10.5 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp 639cc50c-1820-46ba-9def-9a4688f631ef) ${p.P3.str})
    (pad "21" smd custom (at -10.5 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp c9fcee45-a47b-41d7-ae01-a78c33ac04bf) ${p.P3.str})
    (pad "21" thru_hole circle (at -10.5 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 1482796b-e3f4-4413-a0b5-6d4d3eb3999f) ${p.P3.str})
    (pad "21" smd custom (at -10.5 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp fd75db1a-78d3-4da0-acf9-4c4228c48f39))
    (pad "22" smd custom (at -13.04 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 2bc4bdac-df6f-4cdb-9f98-f7368392c1d9) ${p.P2.str})
    (pad "22" smd custom (at -13.04 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp c278ab92-5edb-4226-ba7f-47f342e3592d) ${p.P2.str})
    (pad "22" smd custom (at -13.04 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp 3fcf8b8b-b0e5-4846-9520-68386634abde) ${p.P2.str})
    (pad "22" thru_hole circle (at -13.04 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 6658e748-0025-498d-887d-d3d29c38d08e) ${p.P2.str})
    (pad "22" smd custom (at -13.04 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 51b5395a-ad47-4d32-a819-72044061aaf5))
    (pad "23" smd custom (at -15.58 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp decfd3df-9ad9-4e18-be1f-625cbae81ddd) ${p.P1.str})
    (pad "23" smd custom (at -15.58 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp 0626e9e9-9179-44ef-a771-f9b4460b2a13) ${p.P1.str})
    (pad "23" smd custom (at -15.58 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp c9d1d6ce-6cb2-4403-aea7-0ec475ee08bb) ${p.P1.str})
    (pad "23" thru_hole circle (at -15.58 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp e0313b51-4ab2-4492-a738-eaaab92810a8) ${p.P1.str})
    (pad "23" smd custom (at -15.58 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp b221581a-dd21-470c-a940-ebf86b934d4b))
    (pad "24" smd custom (at -18.12 -13.716 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 4b3add99-03c0-44be-bd91-1cd4500328ed) ${p.P0.str})
    (pad "24" smd custom (at -18.12 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ) (tstamp d3a0f701-c1ab-480f-90eb-18819ae7e9d1) ${p.P0.str})
    (pad "24" smd custom (at -18.12 -8.128 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu")
      (zone_connect 0) (thermal_bridge_angle 90)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ) (tstamp e6130121-e0ce-48a0-b20a-e279bf7a79f9) ${p.P0.str})
    (pad "24" thru_hole circle (at -18.12 -8.128 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu") (tstamp 3b8faa6c-b5e4-438c-a03d-5f17ad67b089) ${p.P0.str})
    (pad "24" smd custom (at -18.12 -4.064 ${p.rot + 180}) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly
          (pts
            (xy 0.6 0)
            (xy -0.6 0)
            (xy -0.6 -1)
            (xy 0 -0.4)
            (xy 0.6 -1)
          )
          (width 0) (fill yes))
      ) (tstamp 4d7a6515-7c8e-411c-9e6d-91a9c1583fa8))
  )
    `;
  }
}

