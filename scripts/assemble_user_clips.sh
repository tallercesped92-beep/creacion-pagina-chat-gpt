#!/usr/bin/env bash
set -e

# Céspedes Automotriz - Master Hero Video Assembly Script
# Utiliza exclusivamente los 3 clips originales aportados por el usuario
# Estructura:
# 1. PRESENTACIÓN: Porsche 911 en adoquín (0:00 - 0:03.5 de Clip 2) + BMW M4 frontal (0:03.5 - 0:07 de Clip 2)
# 2. DETALLE: Llanta forjada Mercedes-AMG con pinza de freno roja en movimiento (Clip 1)
# 3. CIERRE: Mercedes-AMG GT en carretera boscosa europea (Clip 3)
# Duración total: ~22 segundos | 16:9 | Sin audio (-an) | Cortes limpios sin distorsión

CLIP_WHEEL="${1:-public/videos/clip1_wheel.mp4}"
CLIP_CITY="${2:-public/videos/clip2_city.mp4}"
CLIP_FOREST="${3:-public/videos/clip3_forest.mp4}"

# Auto-detect any uploaded mp4 in public/videos or src/assets if default names differ
if [ ! -f "$CLIP_WHEEL" ] || [ ! -f "$CLIP_CITY" ] || [ ! -f "$CLIP_FOREST" ]; then
  echo "Checking for alternative uploaded video files in public/videos and assets..."
  UPLOADED=($(find public/videos src/assets/videos -maxdepth 1 -name "*.mp4" ! -name "hero_cinematic_automotive.mp4" 2>/dev/null))
  if [ ${#UPLOADED[@]} -ge 3 ]; then
    CLIP_WHEEL="${UPLOADED[0]}"
    CLIP_CITY="${UPLOADED[1]}"
    CLIP_FOREST="${UPLOADED[2]}"
    echo "Found uploaded files: $CLIP_WHEEL, $CLIP_CITY, $CLIP_FOREST"
  fi
fi

if [ ! -f "$CLIP_WHEEL" ] || [ ! -f "$CLIP_CITY" ] || [ ! -f "$CLIP_FOREST" ]; then
  echo "Error: Se requieren los 3 clips de vídeo en el explorador de archivos."
  echo "Rutas esperadas:"
  echo "  - $CLIP_WHEEL"
  echo "  - $CLIP_CITY"
  echo "  - $CLIP_FOREST"
  exit 1
fi

TMPDIR="/tmp/cespedes_montaje"
rm -rf "$TMPDIR"
mkdir -p "$TMPDIR"
mkdir -p public/videos src/assets/videos

echo "=== PASO 1: Extrayendo segmentos de máxima fuerza visual ==="

# 1A. Presentación - Porsche 911 (primeros 3.2 segundos del clip de ciudad)
echo "Extrayendo 1A: Presentación Porsche 911..."
ffmpeg -y -ss 00:00:00.00 -to 00:00:03.20 -i "$CLIP_CITY" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24,eq=contrast=1.04:brightness=-0.01:saturation=1.02" \
  -c:v libx264 -pix_fmt yuv420p -preset fast -crf 19 "$TMPDIR/seg1_porsche.mp4"

# 1B. Presentación - BMW M4 frontal avanzando bajo arcada (segundos 3.2 a 6.8 del clip de ciudad)
echo "Extrayendo 1B: Presentación BMW M4 frontal..."
ffmpeg -y -ss 00:00:03.20 -to 00:00:06.80 -i "$CLIP_CITY" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24,eq=contrast=1.04:brightness=-0.01:saturation=1.02" \
  -c:v libx264 -pix_fmt yuv420p -preset fast -crf 19 "$TMPDIR/seg2_bmw.mp4"

# 2. Detalle - Llanta forjada, disco de freno y pinza roja deportiva en movimiento (Clip rueda, 6 segundos)
echo "Extrayendo 2: Detalle Llanta y Pinza de Freno..."
ffmpeg -y -ss 00:00:00.50 -to 00:00:06.50 -i "$CLIP_WHEEL" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24,eq=contrast=1.04:brightness=-0.01:saturation=1.02" \
  -c:v libx264 -pix_fmt yuv420p -preset fast -crf 19 "$TMPDIR/seg3_wheel.mp4"

# 3. Cierre - Mercedes-AMG GT en carretera europea con asfalto húmedo y bosque (Clip bosque, 8.5 segundos)
echo "Extrayendo 3: Cierre Mercedes-AMG GT carretera sinuosa..."
ffmpeg -y -ss 00:00:00.00 -to 00:00:07.00 -i "$CLIP_FOREST" -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=24,eq=contrast=1.04:brightness=-0.01:saturation=1.02" \
  -c:v libx264 -pix_fmt yuv420p -preset fast -crf 19 "$TMPDIR/seg4_amg_gt.mp4"

echo "=== PASO 2: Concatenación con cortes limpios y precisos ==="

cat << 'EOF' > "$TMPDIR/concat_list.txt"
file 'seg1_porsche.mp4'
file 'seg2_bmw.mp4'
file 'seg3_wheel.mp4'
file 'seg4_amg_gt.mp4'
EOF

ffmpeg -y -f concat -safe 0 -i "$TMPDIR/concat_list.txt" \
  -c:v libx264 -pix_fmt yuv420p -profile:v high -level 4.1 -movflags +faststart -crf 20 \
  -an \
  public/videos/hero_cinematic_automotive.mp4

# Sincronizar en assets para Vite
cp public/videos/hero_cinematic_automotive.mp4 src/assets/videos/hero_cinematic_automotive.mp4

echo "=== PASO 3: Generando versión WebM (VP9) para carga ultra-rápida ==="
ffmpeg -y -i public/videos/hero_cinematic_automotive.mp4 \
  -c:v libvpx-vp9 -b:v 1400k -crf 28 -an \
  public/videos/hero_cinematic_automotive.webm

cp public/videos/hero_cinematic_automotive.webm src/assets/videos/hero_cinematic_automotive.webm

echo "=== MONTAJE COMPLETADO CON ÉXITO ==="
ls -lh public/videos/hero_cinematic_automotive.*
