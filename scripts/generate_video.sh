#!/usr/bin/env bash
set -e

echo "Starting cinematic automotive video generation with ZERO jitter..."

IMG1="src/assets/images/bmw_m4_darkness_1788475162547.jpg"
IMG2="src/assets/images/audi_rs6_hero_1787228419698.jpg"
IMG3="src/assets/images/mercedes_amg_gt_arch_1788475189996.jpg"
IMG4="src/assets/images/porsche_911_cinematic_1788475175772.jpg"
IMG5="src/assets/images/auto_detail_macro_1788475203812.jpg"
IMG6="src/assets/images/bmw_m3_competition_1787228432881.jpg"

TMPDIR="/tmp/hero_video_smooth"
rm -rf "$TMPDIR"
mkdir -p "$TMPDIR"
mkdir -p public/videos src/assets/videos

FPS=30
DURATION=4.5

echo "1/6: BMW M4 - Ultra-smooth linear lateral camera glide..."
ffmpeg -y -loop 1 -i "$IMG1" \
  -vf "scale=2752:1536:flags=lanczos,crop=1920:1080:'(iw-ow)/2 - 40 + (t/$DURATION)*80':'(ih-oh)/2',fps=$FPS,fade=t=in:st=0:d=0.8" \
  -t $DURATION -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 "$TMPDIR/c1.mp4"

echo "2/6: Audi RS6 - Ultra-smooth linear push-in dolly..."
ffmpeg -y -loop 1 -i "$IMG2" \
  -vf "scale='2200 + (t/$DURATION)*180':-1:eval=frame:flags=bilinear,crop=1920:1080:'(iw-ow)/2':'(ih-oh)/2',fps=$FPS" \
  -t $DURATION -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 "$TMPDIR/c2.mp4"

echo "3/6: Mercedes-AMG GT - Ultra-smooth architectural glide..."
ffmpeg -y -loop 1 -i "$IMG3" \
  -vf "scale=2752:1536:flags=lanczos,crop=1920:1080:'(iw-ow)/2 + 30 - (t/$DURATION)*60':'(ih-oh)/2',fps=$FPS" \
  -t $DURATION -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 "$TMPDIR/c3.mp4"

echo "4/6: Porsche 911 - Ultra-smooth dynamic road drift..."
ffmpeg -y -loop 1 -i "$IMG4" \
  -vf "scale=2752:1536:flags=lanczos,crop=1920:1080:'(iw-ow)/2 - 35 + (t/$DURATION)*70':'(ih-oh)/2',fps=$FPS" \
  -t $DURATION -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 "$TMPDIR/c4.mp4"

echo "5/6: Macro Caliper Detail - Ultra-smooth slow push-in..."
ffmpeg -y -loop 1 -i "$IMG5" \
  -vf "scale='2250 + (t/$DURATION)*160':-1:eval=frame:flags=bilinear,crop=1920:1080:'(iw-ow)/2':'(ih-oh)/2',fps=$FPS" \
  -t $DURATION -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 "$TMPDIR/c5.mp4"

echo "6/6: BMW M3 Finale - Ultra-smooth stable lateral drift..."
ffmpeg -y -loop 1 -i "$IMG6" \
  -vf "scale=2752:1536:flags=lanczos,crop=1920:1080:'(iw-ow)/2 + 30 - (t/$DURATION)*60':'(ih-oh)/2',fps=$FPS,fade=t=out:st=3.7:d=0.8" \
  -t $DURATION -c:v libx264 -pix_fmt yuv420p -preset medium -crf 18 "$TMPDIR/c6.mp4"

echo "Assembling seamless master reel with film crossfades..."
ffmpeg -y \
  -i "$TMPDIR/c1.mp4" \
  -i "$TMPDIR/c2.mp4" \
  -i "$TMPDIR/c3.mp4" \
  -i "$TMPDIR/c4.mp4" \
  -i "$TMPDIR/c5.mp4" \
  -i "$TMPDIR/c6.mp4" \
  -filter_complex "\
    [0:v][1:v]xfade=transition=fade:duration=0.8:offset=3.7[v12]; \
    [v12][2:v]xfade=transition=fade:duration=0.8:offset=7.4[v123]; \
    [v123][3:v]xfade=transition=fade:duration=0.8:offset=11.1[v1234]; \
    [v1234][4:v]xfade=transition=fade:duration=0.8:offset=14.8[v12345]; \
    [v12345][5:v]xfade=transition=fade:duration=0.8:offset=18.5[outv]; \
    [outv]eq=contrast=1.02:brightness=0.0:saturation=1.02[finalv]" \
  -map "[finalv]" \
  -c:v libx264 -pix_fmt yuv420p -profile:v high -level 4.1 -movflags +faststart -crf 18 \
  public/videos/hero_cinematic_automotive.mp4

echo "Creating WebM optimized version..."
ffmpeg -y -i public/videos/hero_cinematic_automotive.mp4 \
  -c:v libvpx-vp9 -b:v 2M -crf 24 -deadline good -cpu-used 2 \
  public/videos/hero_cinematic_automotive.webm

cp public/videos/hero_cinematic_automotive.mp4 src/assets/videos/hero_cinematic_automotive.mp4 || true

echo "Master video created successfully with ZERO vibration."
ls -lh public/videos/hero_cinematic_automotive.*
