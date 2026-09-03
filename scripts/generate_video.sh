#!/usr/bin/env bash
set -e

echo "Starting cinematic automotive video generation..."

IMG1="src/assets/images/bmw_m4_darkness_1788475162547.jpg"
IMG2="src/assets/images/audi_rs6_hero_1787228419698.jpg"
IMG3="src/assets/images/mercedes_amg_gt_arch_1788475189996.jpg"
IMG4="src/assets/images/porsche_911_cinematic_1788475175772.jpg"
IMG5="src/assets/images/auto_detail_macro_1788475203812.jpg"
IMG6="src/assets/images/bmw_m3_competition_1787228432881.jpg"

TMPDIR="/tmp/hero_video_build"
rm -rf "$TMPDIR"
mkdir -p "$TMPDIR"
mkdir -p public/videos src/assets/videos

FPS=24
CLIP_FRAMES=108 # 4.5 seconds at 24fps

echo "1/6: BMW M4 - Emerging from darkness..."
ffmpeg -y -i "$IMG1" \
  -vf "zoompan=z='min(zoom+0.0012,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$CLIP_FRAMES:s=1280x720:fps=$FPS,fade=t=in:st=0:d=1.0" \
  -frames:v $CLIP_FRAMES -c:v libx264 -pix_fmt yuv420p -preset faster -crf 22 "$TMPDIR/c1.mp4"

echo "2/6: Audi RS6 - Tracking shot glide..."
ffmpeg -y -i "$IMG2" \
  -vf "zoompan=z='1.12-0.0008*on':x='(iw-iw/zoom)*(on/$CLIP_FRAMES)':y='ih/2-(ih/zoom/2)':d=$CLIP_FRAMES:s=1280x720:fps=$FPS" \
  -frames:v $CLIP_FRAMES -c:v libx264 -pix_fmt yuv420p -preset faster -crf 22 "$TMPDIR/c2.mp4"

echo "3/6: Mercedes-AMG GT - Architectural prestige..."
ffmpeg -y -i "$IMG3" \
  -vf "zoompan=z='min(zoom+0.0010,1.14)':x='(iw-iw/zoom)*0.5':y='(ih-ih/zoom)*0.4':d=$CLIP_FRAMES:s=1280x720:fps=$FPS" \
  -frames:v $CLIP_FRAMES -c:v libx264 -pix_fmt yuv420p -preset faster -crf 22 "$TMPDIR/c3.mp4"

echo "4/6: Porsche 911 - Alpine road dynamic tracking..."
ffmpeg -y -i "$IMG4" \
  -vf "zoompan=z='1.06+0.0009*on':x='(iw-iw/zoom)*(1-on/$CLIP_FRAMES)':y='ih/2-(ih/zoom/2)':d=$CLIP_FRAMES:s=1280x720:fps=$FPS" \
  -frames:v $CLIP_FRAMES -c:v libx264 -pix_fmt yuv420p -preset faster -crf 22 "$TMPDIR/c4.mp4"

echo "5/6: Macro detail - Carbon ceramic caliper & forged craftsmanship..."
ffmpeg -y -i "$IMG5" \
  -vf "zoompan=z='min(zoom+0.0014,1.18)':x='(iw-iw/zoom)*0.6':y='(ih-ih/zoom)*0.5':d=$CLIP_FRAMES:s=1280x720:fps=$FPS" \
  -frames:v $CLIP_FRAMES -c:v libx264 -pix_fmt yuv420p -preset faster -crf 22 "$TMPDIR/c5.mp4"

echo "6/6: Finale - BMW M3 Competition return..."
ffmpeg -y -i "$IMG6" \
  -vf "zoompan=z='min(zoom+0.0010,1.12)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$CLIP_FRAMES:s=1280x720:fps=$FPS,fade=t=out:st=3.5:d=1.0" \
  -frames:v $CLIP_FRAMES -c:v libx264 -pix_fmt yuv420p -preset faster -crf 22 "$TMPDIR/c6.mp4"

echo "Assembling master automotive reel with crossfades..."
ffmpeg -y \
  -i "$TMPDIR/c1.mp4" \
  -i "$TMPDIR/c2.mp4" \
  -i "$TMPDIR/c3.mp4" \
  -i "$TMPDIR/c4.mp4" \
  -i "$TMPDIR/c5.mp4" \
  -i "$TMPDIR/c6.mp4" \
  -filter_complex "\
    [0:v][1:v]xfade=transition=fade:duration=1:offset=3.5[v12]; \
    [v12][2:v]xfade=transition=fade:duration=1:offset=7.0[v123]; \
    [v123][3:v]xfade=transition=fade:duration=1:offset=10.5[v1234]; \
    [v1234][4:v]xfade=transition=fade:duration=1:offset=14.0[v12345]; \
    [v12345][5:v]xfade=transition=fade:duration=1:offset=17.5[outv]; \
    [outv]eq=contrast=1.08:brightness=-0.03:saturation=1.05[finalv]" \
  -map "[finalv]" \
  -c:v libx264 -pix_fmt yuv420p -profile:v high -level 4.1 -movflags +faststart -crf 22 \
  public/videos/hero_cinematic_automotive.mp4

cp public/videos/hero_cinematic_automotive.mp4 src/assets/videos/hero_cinematic_automotive.mp4

echo "Master video created successfully:"
ls -lh public/videos/hero_cinematic_automotive.mp4
