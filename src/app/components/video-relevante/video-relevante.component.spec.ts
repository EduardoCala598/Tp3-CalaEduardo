import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRelevanteComponent } from './video-relevante.component';

describe('VideoRelevanteComponent', () => {
  let component: VideoRelevanteComponent;
  let fixture: ComponentFixture<VideoRelevanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoRelevanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRelevanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
