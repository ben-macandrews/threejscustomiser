import React from 'react'
import { SketchPicker } from "react-color";
import { useSnapshot } from 'valtio';

import state from '../store'

function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#FF6F61", // Coral
          "#FFD700", // Gold
          "#FF69B4", // Hot Pink
          "#00CED1", // Turquoise
          "#FFA07A", // Light Salmon
          "#32CD32", // Lime Green
          "#BA55D3", // Medium Orchid
          "#FF6347", // Tomato
          "#FFD700", // Goldenrod
          "#00FF7F", // Spring Green
          "#9370DB", // Medium Purple
          "#FF4500", // Orange Red
          "#20B2AA", // Light Sea Green
          "#FF1493", // Deep Pink
          "#8A2BE2",  // Blue Violet
          "#dde048", // Teya Lime
          "#151515", // Teya Charcoal
          "f5f5f5", // Teya Off white
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker